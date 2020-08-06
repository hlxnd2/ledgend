import Vue from "vue";
import Vuex from "vuex";
import ImportView from "../views/ImportView.vue";
import PreviewView from "../views/PreviewView.vue";
import backend from "../js/backend";

Vue.use(Vuex);

// initial state
const state = () => ({
  config: {
    appName: "Ledgend",
    pages: [
      {
        id: 0,
        name: "Dashboard",
        icon: "mdi-home",
        link: "page0",
        destination: PreviewView
      },
      {
        id: 1,
        name: "Import",
        icon: "mdi-file-import-outline",
        link: "page1",
        sublinks: [
          {
            id: 11,
            name: "Import",
            icon: "mdi-file",
            link: "FOR1",
            destination: ImportView,
            prop: "for1"
          }
        ],
        destination: ImportView
      }
    ],
    currentProfile: {
      separator: ",",
      ignoreHeaderLines: 2,
      mappings: []
    }
  },
  imports: [
    {
      name: "for1",
      raw: `Date opération;Date valeur;libellé;Débit;Crédit;
18/11/2019;18/11/2019;QWERTZ;-2;
11/11/2019;11/11/2019;KW;-368;
08/11/2019;08/11/2019;YYY;-255,1;
08/11/2019;08/11/2019;YYY;-255,1;
07/11/2019;07/11/2019;XXX;3350;`,
      data: {},
      ledger: "",
      ledgerText: ""
    }
  ]
});

// getters
const getters = {};

// actions
const actions = {
  updateLedger(context) {
    let m = context.state.config.currentProfile.mappings;
    let d = context.state.imports[0].data;
    context.state.imports[0].ledger = JSON.stringify(
      context.state.imports[0].data,
      null,
      2
    );

    let tt = d
      .map(item => {
        let text = "";
        let key = m.filter(y => y.mapping === "Date");
        if (key.length > 0) text += item[key[0].name];
        key = m.filter(y => y.mapping === "Description");
        if (key.length > 0) text += "  " + item[key[0].name];
        text += "\n  Account1";
        key = m.filter(y => y.mapping === "Credit");
        if (key.length > 0) text += "  " + item[key[0].name];
        key = m.filter(y => y.mapping === "Debit");
        if (key.length > 0) text += "  -" + item[key[0].name];
        text += "\n  Account2";
        key = m.filter(y => y.mapping === "Credit");
        if (key.length > 0) text += "  -" + item[key[0].name];
        key = m.filter(y => y.mapping === "Debit");
        if (key.length > 0) text += "  " + item[key[0].name];
        return text;
      })
      .reduce((acc, item) => {
        return (acc += "\n\n" + item);
      });
    context.state.imports[0].ledgerText = tt;
  },
  updateProfile(context, value) {
    context.commit("updateProfile", value);
    context.dispatch("updateLedger");
  },
  updateCSV(context, csv) {
    context.commit("updateCSV", csv);
    backend.parseCsvString(
      context.state.imports[0].raw,
      x => {
        context.state.imports[0].data = x;

        let data = [];
        for (var key in context.state.imports[0].data[0]) {
          data.push({
            name: key,
            mapping: "",
            modify: ""
          });
        }
        context.state.config.currentProfile.mappings = data;
        context.dispatch("updateLedger");
      },
      { csvConfig: context.state.config.currentProfile }
    );
  },
  updateMapping(context, item) {
    context.commit("updateMapping", item);
    context.dispatch("updateLedger");
  }
};

// mutations
const mutations = {
  updateProfile(state, value) {
    if (value.type === "ihl") {
      state.config.currentProfile.ignoreHeaderLines = value.value;
    } else if (value.type === "sep") {
      state.config.currentProfile.separator = value.value;
    }
  },
  updateCSV(state, csv) {
    state.imports[0].raw = csv;
    state.config.currentProfile.separator = backend.guessSeparator(csv);
  },
  updateMapping(state, item) {
    for (let i = 0; i < state.config.currentProfile.mappings.length; i++) {
      if (state.config.currentProfile.mappings[i].key === item.name) {
        state.config.currentProfile.mappings[i].mapping = item.mapping;
        break;
      }
    }
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
