<template fill-heightx>
  <v-container class="grey lighten-5">
    <v-row class="mb-12" no-gutters>
      <!-- <v-col>
        <v-card class="pa-2" outlined tile>
          <v-card-title>
            <div @click="showProfile=!showProfile">
              <v-icon v-if="showProfile" left>mdi-chevron-down</v-icon>
              <v-icon v-else left>mdi-chevron-right</v-icon>
            </div>
            <span>CSV Import Profile</span>
          </v-card-title>
          <v-slide-y-transition>
            <ProfileEditor v-show="showProfile"/>
          </v-slide-y-transition>
        </v-card>
      </v-col>
      <v-responsive
          key="width-1"
          width="100%"
      ></v-responsive>-->
      <v-col>
        <v-card height="1000px">
          <v-card-title class="lighten-2 indigo white--text">
            <span class="title font-weight-light">Import CSV</span>
            <v-spacer/>
            <v-icon color="white" right>mdi-cog</v-icon>
          </v-card-title>
          <v-tabs v-model="tab">
            <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item.tab">
              <component v-bind:is="item.content"></component>
              <!-- <v-card flat>
            <v-card-text>{{ item.content }}</v-card-text>
              </v-card>-->
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
      <v-responsive key="width-1" width="100%"></v-responsive>
    </v-row>
  </v-container>
</template>


<script>
import ProfileEditor from "../components/ProfileEditor.vue";
import CSVContent from "../components/CSVContent.vue";

var CoPo = {
  data: function() {
    return {
      count: 0
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
};

let LedgerComponent = { template: "<h1>ledger</h1>" };

export default {
  name: "ImportView",
  components: {
    ProfileEditor,
    CoPo,
    CSVContent,
    LedgerComponent
  },
  data: function() {
    return {
      show: "csv",
      tab: null,
      showProfile: true,
      items: [
        { tab: "CSV File", content: CSVContent },
        { tab: "Tabular view", content: CoPo },
        { tab: "Ledger", content: LedgerComponent }
      ]
    };
  }
};
</script>
