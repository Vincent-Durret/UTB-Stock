import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/bois",
      component: () => import("../views/Bois.vue"),
    },
    {
      path: "/bois/itauba",
      component: () => import("../views/Itauba.vue"),
    },
    {
      path: "/quicailleries",
      component: () => import("../views/Quincailleries.vue"),
    },
    {
      path: "/produits",
      component: () => import("../views/Produits.vue"),
    },
    {
      path: "/autres",
      component: () => import("../views/Autres.vue"),
    },
    {
      path: "/login",
      component: () => import("../views/Login.vue"),
    },
  ],
});

export default router;
