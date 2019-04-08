<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">GitView</h1>
        <h2 class="subtitle">
          Here you can view a
          <strong>summary</strong> of your
          <strong>GitHub</strong> repo.
        </h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      name: "welcome"
    };
  }
});
</script>
