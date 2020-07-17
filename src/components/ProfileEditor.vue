<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-text-field label="Separator" v-model="profile.separator"></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field label="Ignore header lines" v-model="profile.ignoreHeadeLines"></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-select :items="encodings" label="Encoding"></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "ProfileEditor",
  data: function() {
    return {
      profile: {
        separator: ".",
        ignoreHeadeLines: 2
      },
      encodings: ["UTF-8", "DOS", "Latin 1"]
    };
  }
};
</script>

<style>
<style > .v-text-field input {
  font-size: 1.2em;
}
</style>
