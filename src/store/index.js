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
      ignoreHeaderLines: 2
    }
  },
  imports: [
    {
      name: "for1",
      raw: "",
      data: {}
    }
  ]
});

// getters
const getters = {
  currentLedger: state => {
    return new Promise((resolve, reject) => {
      // This is a not a Node styled callback.
      // 1. data is the first argument
      // 2. err is the second argument
      backend.parseCsvString(
        state.imports[0].raw,
        x => {
          state.imports[0].data = x;
          //console.log(x);
          return resolve(JSON.stringify(x, null, 2));
        },
        { csvConfig: state.config.currentProfile }
      );
    });
  }
};

// actions
const actions = {};

// mutations
const mutations = {
  updateProfile(state, value) {
    if (value.type === "ihl") {
      state.config.currentProfile.ignoreHeaderLines = value.value;
      // backend.parseCsvString(
      //   state.imports[0].raw,
      //   x => (state.imports[0].ledger = JSON.stringify(x, null, 2)),
      //   { csvConfig: state.config.currentProfile }
      // );
    } else if (value.type === "sep") {
      state.config.currentProfile.separator = value.value;
      // backend.parseCsvString(
      //   state.imports[0].raw,
      //   x => (state.imports[0].ledger = JSON.stringify(x, null, 2)),
      //   { csvConfig: state.config.currentProfile }
      // );
    }
  },
  updateCSV(state, csv) {
    state.imports[0].raw = csv;
    state.config.currentProfile.separator = backend.guessSeparator(csv);
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
