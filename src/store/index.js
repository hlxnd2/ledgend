import Vue from "vue";
import Vuex from "vuex";
import ImportView from "../views/ImportView.vue";
import PreviewView from "../views/PreviewView.vue";

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
        destination: ImportView
      }
    ]
  }
});

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
