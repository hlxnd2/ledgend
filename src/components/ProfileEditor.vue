<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="Separator"
            :value="this.profile.separator"
            @change="updateProfileSeparator"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Ignore header lines"
            :value="this.profile.ignoreHeaderLines"
            @change="updateProfileIgnoreHeaderLines"
          ></v-text-field>
        </v-col>

        <v-col cols="12">
          <v-select :items="encodings" label="Encoding"></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <ImportMappingTable/>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapState } from "vuex";
import ImportMappingTable from "./ImportMappingTable";

export default {
  components: {
    ImportMappingTable
  },
  name: "ProfileEditor",
  data: function() {
    return {
      encodings: ["UTF-8", "DOS", "Latin 1"]
    };
  },
  computed: {
    ...mapState({
      profile: state => {
        return state.config.currentProfile;
      }
    })
  },
  methods: {
    updateProfileIgnoreHeaderLines: function(e) {
      this.$store.dispatch("updateProfile", { type: "ihl", value: e });
    },
    updateProfileSeparator: function(e) {
      this.$store.dispatch("updateProfile", { type: "sep", value: e });
    }
  }
};
</script>

<style>
.v-text-field input {
  font-size: 1.2em;
}
</style>
