<template>
  <div>
    <div>
      <button v-on:click="() => fetchCommits(this.$store)">View Commits</button>
    </div>
    <div>Display: {{this.$store.getters.commits}}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Commits",
  methods: {
    fetchCommits: function(store: any) {
      store.dispatch("fetchCommits");
    }
  }
});
</script>
