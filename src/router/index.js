import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Connexion.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Login,
    },
    {
      path: "/home",
      component: () => import("../views/Home.vue"),
      // meta: {
      //   requiresAuth: true,
      // },
    },
    {
      path: "/bois",
      component: () => import("../views/Bois.vue"),
    },
    {
      path: "/quicailleries",
      component: () => import("../views/Quincailleries.vue"),
    },
    {
      path: "/quicailleries/terrasses",
      component: () => import("../../src/components/SubPageHardwareStore.vue"),
    },
    {
      path: "/produits",
      component: () => import("../views/Produits.vue"),
    },
    {
      path: "/autres",
      component: () => import("../views/Autres.vue"),
    },
  ],
});


export default router;
