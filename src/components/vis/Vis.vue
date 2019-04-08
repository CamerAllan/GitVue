<template>
  <div>
    <div>
      <button class="button is-primary" v-on:click="fetchCommits">View Commits</button>
    </div>
    <div class="container is-12">
      <GraphContainer :commits="commits"/>
      <!-- <div class="columns">
        <div class="column is-9">
          <Commits :commits="this.commits"/>
        </div>
        <div class="column is-3">
          <Branches :branches="this.branches"/>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../../store/Store";
import Commits from "./Commits.vue";
import Branches from "./Branches.vue";
import GraphContainer from "./draw/GraphContainer.vue";

export default Vue.extend({
  name: "Vis",
  methods: {
    fetchCommits: function() {
      store.dispatch("fetchCommits");
    }
  },
  components: {
    Commits,
    Branches,
    GraphContainer
  },
  props: ["commits", "branches"]
});
</script>
