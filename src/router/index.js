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
    name: 'Home',
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
  if (to.path === "/connexion" && auth.currentUser) {
    next('/');
    return;
  } else if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    next('/connexion');
    return;
  } else {
    next();

  }
});

// router.beforeEach((to, from, next) => {
//   if (to.path === '/connexion' && auth.currentUser) {
//     next('/')
//     return
//   }

//   if (
//     to.matched.some((record) => record.meta.requiresAuth) &&
//     !auth.currentUser
//   ) {
//     next()
//     return
//   }

//   next()
// })

export default router;
