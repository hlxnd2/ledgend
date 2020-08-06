<template>
  <v-data-table :headers="headers" :items="mappings" disable-pagination hide-default-footer dense>
    <template v-slot:item.mapping="props">
      <v-select
        v-model="props.item.mapping"
        :items="['','Date','Description','Debit','Credit']"
        dense
        solo
        flat
        lazy
        full-height
        hide-details
        @change="updateMapping(props.item)"
      ></v-select>
    </template>

    <!-- <template v-slot:item.name="props">
        <v-edit-dialog
          :return-value.sync="props.item.name"
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        > {{ props.item.name }}
          <template v-slot:input>
            <v-text-field
              v-model="props.item.name"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
            ></v-text-field>
          </template>
        </v-edit-dialog>
    </template>-->
    <!-- <template v-slot:item.iron="props">
        <v-edit-dialog
          :return-value.sync="props.item.iron"
          large
          persistent
          @save="save"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          <div>{{ props.item.iron }}</div>
          <template v-slot:input>
            <div class="mt-4 title">Update Iron</div>
          </template>
          <template v-slot:input>
            <v-text-field
              v-model="props.item.iron"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
              autofocus
            ></v-text-field>
          </template>
        </v-edit-dialog>
    </template>-->
  </v-data-table>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      max25chars: v => v.length <= 25 || "Input too long!",
      pagination: {},
      headers: [
        {
          text: "CSV name",
          align: "start",
          //sortable: false,
          value: "name"
        },
        { text: "Map to", value: "mapping" },
        { text: "Modify", value: "mod" }
      ]
    };
  },
  computed: {
    ...mapState({
      mappings: function(state) {
        return state.config.currentProfile.mappings;
      }
    })
  },
  methods: {
    updateMapping(item) {
      this.$store.dispatch("updateMapping", item);
      //this.$store.dispatch("updateLedger");
    }
  }
};
</script>
