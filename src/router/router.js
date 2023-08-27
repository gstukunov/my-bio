import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../pages/Home/Home.vue";
import SpecialPage from "../pages/Special/Special.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: HomePage },
    { path: "/special", component: SpecialPage },
  ],
});
