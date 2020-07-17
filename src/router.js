import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

Vue.use(VueRouter);

export default new VueRouter({
  routes: store.state.config.pages.map(x => {
    return {
      path: "/" + x.link,
      name: x.name,
      component: x.destination
    };
  })
  // {
  //   path: '/page1',
  //   name: 'Page 1',
  //   component: component1,
  // },
  // {
  //   path: '/page2',
  //   name: 'Page 2',
  //   component: component2,
  // },
  // {
  //   path: '/page3',
  //   name: 'Page Three',
  //   component: component3,
  // },
  // { path: '*', redirect: '/page1' }
  // ]
});
