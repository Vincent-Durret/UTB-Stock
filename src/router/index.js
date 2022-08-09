import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Login from "../views/Login.vue";

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
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/bois",
      component: () => import("../views/Bois.vue"),
    },
    {
      path: "/bois/itauba",
      component: () => import("../views/Bois/Itauba.vue"),
    },
    {
      path: "/bois/ipe",
      component: () => import("../views/Bois/Ipe.vue"),
    },
    {
      path: "/bois/cumaru",
      component: () => import("../views/Bois/Cumaru.vue"),
    },
    {
      path: "/bois/structures",
      component: () => import("../views/Bois/Structures.vue"),
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
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  })
}

router.beforeEach( async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("Vous n'avez pas acces !");
      next("/home");
    }
  } else {
    next();
  }
});

export default router;
