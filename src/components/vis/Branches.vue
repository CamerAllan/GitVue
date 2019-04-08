<template>
  <div>
    <div class="tile is-ancestor" v-for="(item) in this.branches" :key="item.name">
      <div class="tile is-12 is-vertical is-parent">
        <br>
        <div class="tile is-child box">
          <p class="title">{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "../../store/Store";

export default Vue.extend({
  name: "Branches",
  methods: {},
  props: ["branches"]
});
</script>
