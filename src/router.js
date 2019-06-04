import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Poverty from "./views/Poverty.vue";
import Generation from "./views/Generation.vue";
import Gender from "./views/Gender.vue";
import Latitude from "./views/Latitude.vue";
import Calculator from "./views/Calculator.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/poverty",
      name: "poverty",
      component: Poverty
    },
    {
      path: "/generation",
      name: "generation",
      component: Generation
    },
    {
      path: "/latitude",
      name: "latitude",
      component: Latitude
    },
    {
      path: "/gender",
      name: "gender",
      component: Gender
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/calculator",
      name: "calculator",
      component: Calculator
    }
  ]
})
