import Vue from "vue";
import HomeComponent from "./components/HomePage.vue";
import store from "./store/Store";

let v = new Vue({
  el: "#app",
  store,
  components: {
    HomeComponent
  },
  template: `
    <home-component />
    `,
  data: {}
});
