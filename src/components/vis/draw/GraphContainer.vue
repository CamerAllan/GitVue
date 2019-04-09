<template>
  <div class="container">
    <D3Network :net-nodes="nodes" :net-links="edges" :options="options" :linkCb="lcb"/>
  </div>
</template>

<script lang="js">
import Vue from "vue";
const D3Network = require("vue-d3-network");

export default Vue.extend({
  name: "GraphContainer",
  methods: {},
  props: ["commits"],
  computed: {
    nodes: function() {
      const commitNodes = [];
      let i = 1;
      for (const c in this.commits) {
        commitNodes.push({ id: this.commits[c].node.oid, name: this.commits[c].node.messageHeadline });
      }
      return commitNodes;
    },
    edges: function() {
      const edges = [];
      for (const c1 in this.commits) {
        const oid1 = this.commits[c1].node.oid;
          for (const c2 in this.commits) {
            if (c1 !== c2) {
              const oid2 = this.commits[c2].node.parents.nodes[0].oid;
              if (oid1 == oid2) {
                edges.push({tid:this.commits[c2].node.oid, sid: oid1, _color: "blue"});
              }
          }
        }
      }
      console.log(edges);
      return edges;
    },
    options(){
      return{
        force: 3000,
        size: { w:1200, h:1200},
        nodeSize: 10,
        nodeLabels: true,
        linkLabels: true,
        canvas: this.canvas,
        linkWidth:2
      }
    }
  },
  components: {
    D3Network
  },
  methods:{
    lcb (link) {
      link.class = "link curve";
      return link
    }
  }
});
</script>