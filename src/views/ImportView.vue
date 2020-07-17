<template>
  <v-container fill-height>
    <ProfileEditor/>

    <v-tabs v-model="tab" background-color="primary" dark>
      <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-card flat>
          <v-card-text>{{ item.content }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

    <v-tabs>
      <v-tab>CSV</v-tab>
      <v-tab @change>Table</v-tab>
      <v-tab>Ledger</v-tab>
    </v-tabs>

    <v-textarea
      wrap="off"
      filled
      style="height: 100%;"
      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
    ></v-textarea>
  </v-container>
</template>

<script>
import ProfileEditor from "../components/ProfileEditor.vue";
export default {
  name: "ImportView",
  components: {
    ProfileEditor
  },
  data: function() {
    return {
      show: "csv",
      items: [{ content: a, tab: "ssd" }]
    };
  }
};
</script>
