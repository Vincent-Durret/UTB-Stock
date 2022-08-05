import { createRouter, createWebHistory } from "vue-router";
import Bois from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Bois,
    },
    {
      path: "/quicailleries",
      component: () => import("../views/About.vue"),
    },
  ],
})

export default router;
