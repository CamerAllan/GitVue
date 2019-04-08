<template>
  <section class="homepage">
    <Navbar/>
    <Welcome/>
    <div class="container">
      <p class="subtitle"></p>
      <Vis :commits="this.$store.getters.commits"/>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import Navbar from "./Navbar";
import Vis from "./Vis";
import Welcome from "./WelcomeBanner";

export default Vue.extend({
  data() {
    return {
      product: "Socks"
    };
  },
  components: {
    Navbar,
    Vis,
    Welcome
  }
});
</script>
