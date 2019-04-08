<template>
  <section class="homepage">
    <Navbar/>
    <Welcome/>
    <div class="container">
      <p class="subtitle"></p>
      <Vis :commits="this.$store.getters.commits" :branches="this.$store.getters.branches"/>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import Navbar from "./Navbar";
import Vis from "./vis/Vis";
import Welcome from "./WelcomeBanner";

export default Vue.extend({
  components: {
    Navbar,
    Vis,
    Welcome
  }
});
</script>
