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

            <v-dialog v-model="dialog" max-width="80%">
              <template v-slot:activator="{ on, attrs }">
                <v-icon color="white" right v-bind="attrs" v-on="on">mdi-cog</v-icon>
              </template>
              <v-card>
                <v-card-title class="headline">Import profile</v-card-title>
                <v-card-text>
                  <profile-editor/>
                </v-card-text>
                <!-- <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
                  <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
                </v-card-actions>-->
              </v-card>
            </v-dialog>
          </v-card-title>
          <v-tabs v-model="tab">
            <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item.tab">
              <component v-bind:is="item.content"></component>
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
import LedgerComponent from "../components/LedgerComponent.vue";

var CoPo = {
  data: function() {
    return {
      count: 0
    };
  },
  template:
    '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
};

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
      dialog: false,
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
