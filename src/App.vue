<template>
  <v-app id="inspire">
    <NavigationDrawer :drawer.sync="drawer"/>

    <v-app-bar app clipped-left color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ config.appName }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavigationDrawer from "./components/NavigationDrawer";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    NavigationDrawer
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  computed: mapState({
    config: state => {
      console.log(state);
      return state.config;
    }
  })
};
</script>
