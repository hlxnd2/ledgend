<template>
  <v-container height="100%">
    <v-row height="100%">
      <v-col cols="12">
        <pre> {{ ledgerData }} </pre>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  data: function() {
    return {
      //ledgerData: "# Paste data in CSV tab"
    };
  },
  computed: {
    ...mapState({
      ledgerData: function(state) {
        // let data = state.imports.filter(x => x.name === "for1");
        //   // if (data.length > 0) return data[0].ledger;
        //   // else return "";
        //   //return this.$store.getters.currentLedger;
        return state.imports[0].ledgerText;
      }
    }),
    ...mapGetters(["currentLedger"])
  },
  mounted() {
    //this.$store.dispatch("updateLedger")
  }
};
</script>
