import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Poverty from "./views/Poverty.vue";

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
      path: "/about",
      name: "about",
      component: About
    }
  ]
})
