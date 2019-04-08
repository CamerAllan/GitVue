<template>
  <div>
    <div>
      <button class="button is-primary" v-on:click="fetchCommits">View Commits</button>
    </div>
    <div class="tile is-ancestor" v-for="(item) in this.commits" :key="item.node.oid">
      <div class="tile is-12 is-vertical is-parent">
        <br>
        <div class="tile is-child box">
          <p class="title">{{item.node.message}}</p>
          <p>
            <strong>Author:</strong>
            {{item.node.author.name}}
          </p>
          <p>
            <strong>Date:</strong>
            {{item.node.author.date}}
          </p>
          <p>
            <strong>SHA:</strong>
            {{item.node.oid}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../store/Store";

export default Vue.extend({
  name: "Vis",
  methods: {
    fetchCommits: function() {
      store.dispatch("fetchCommits");
    }
  },
  props: ["commits"]
});
</script>
