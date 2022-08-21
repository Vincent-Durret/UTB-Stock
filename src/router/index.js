import { createRouter, createWebHistory } from "vue-router";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

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
      // meta: {
      //   requiresAuth: true,
      // },
    },
    {
      path: "/bois",
      component: () => import("../views/Bois.vue"),
    },
    {
      path: "/bois/itauba",
      name: "Itauba",
      component: () => import("../components/SubPage.vue"),
    },
    {
      path: "/bois/ipe",
      component: () => import("../components/SubPage.vue"),
    },
    {
      path: "/bois/cumaru",
      component: () => import("../components/SubPage.vue"),
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

// const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const removeListener = onAuthStateChanged(
//       getAuth(),
//       (user) => {
//         removeListener();
//         resolve(user);
//       },
//       reject
//     )
//   })
// }

// router.beforeEach( (to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (getCurrentUser()) {
//       next();
//     } else {
//       alert("Vous n'avez pas acces !");
//       next("/");
//     }
//   } else {
//     next();
//   }
// });

export default router;
