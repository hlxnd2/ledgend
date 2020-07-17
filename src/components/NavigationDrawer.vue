<template>
  <v-navigation-drawer
    v-model="drawerState"
    app
    clipped
    @input="$emit('update:drawer', drawerState);"
  >
    <v-list dense>
      <v-list-item v-for="page in config.pages" :key="page.id" link :to="{path: page.link}">
        <v-list-item-action>
          <v-icon>{{ page.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ page.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavigationDrawer",
  props: {
    msg: String,
    drawer: Boolean
  },
  computed: {
    ...mapState({
      config: state => state.config
    })
  },
  data: function() {
    return {
      drawerState: this.drawer
    };
  },
  watch: {
    drawer: function(newVal, oldVal) {
      this.drawerState = newVal;
    }
  }
};
</script>