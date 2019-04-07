<template>
  <section class="homepage">
    <Navbar/>
    <div class="container">
      <h1 class="title">GitVue</h1>
      <p class="subtitle">
        My first website with
        <strong>Bulma</strong>!
      </p>
      <Commits/>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import Navbar from "./Navbar";
import Commits from "./Commits";

export default Vue.extend({
  data() {
    return {
      product: "Socks"
    };
  },
  components: {
    Navbar,
    Commits
  }
});
</script>
