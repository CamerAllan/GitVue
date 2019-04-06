import Vue from "vue";
import HomeComponent from "./components/HomePage.vue";

let v = new Vue({
    el: "#app",
    template: `
    <home-component />
    `,
    data: {},
    components: {
        HomeComponent
    }
});
