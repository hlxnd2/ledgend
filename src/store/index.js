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
        id: 1,
        name: "Import",
        icon: "mdi-home",
        link: "page1",
        destination: ImportView
      },
      {
        id: 2,
        name: "Preview",
        icon: "mdi-cog",
        link: "page2",
        destination: PreviewView
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
