import Vue from "vue";
import store from "./store";
import router from "./router.js";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify"; // path to vuetify export

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount("#app");
