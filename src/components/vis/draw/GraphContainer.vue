<template>
  <div class="container">
    <Graph :nodes="nodes" :edges="edges"/>
  </div>
</template>

<script lang="js">
import Vue from "vue";
import Graph from "./Graph.vue";
import * as vis from "vis";

export default Vue.extend({
  name: "GraphContainer",
  methods: {},
  props: ["commits"],
  computed: {
    nodes: function() {
      const commitNodes = [];
      let i = 1;
      for (const c in this.commits) {
        commitNodes.push({ id: i++, label: this.commits[c].node.oid });
      }
      return new vis.DataSet(commitNodes);
    },
    edges: function() {
      return new vis.DataSet([
        { from: 1, to: 3 },
        { from: 1, to: 2 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
      ]);
    }
  },
  components: {
    Graph
  }
});
</script>