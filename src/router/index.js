import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Connexion from "../views/Connexion.vue";
import Products from "../views/Products.vue";
import SubPage from "../views/SubPage.vue";
import PageNotFound from "../components/PageNotFound.vue";

import { auth } from "../Firebase/firebase.js";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:category",
    component: Products,
    name: "Products",
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:category/:id",
    component: SubPage,
    name: "SubPage",
    props: true,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/connexion",
    name: "Connexion",
    component: Connexion,
  },

  {
    path: "/:catchAll(.*)",
    component: PageNotFound,
    name: "NotFound",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  auth.onAuthStateChanged((user) => {
    if (requiresAuth && !user) {
      next("/connexion");
    } else if (to.name === "Connexion" && user) {
      next("/");
    } else {
      next();
    }
  });
});

export default router;
