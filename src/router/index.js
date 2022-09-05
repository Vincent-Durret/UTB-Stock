
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Connexion from '../views/Connexion.vue'
import { auth } from '../Firebase/firebase.js'

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/bois",
    component: () => import("../views/Bois.vue"),
    name: "Bois",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/quicailleries",
    component: () => import("../views/Quincailleries.vue"),
    name: "Quicailleries",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/produits",
    name: "Produits",
    component: () => import("../views/Produits.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/autres",
    name: "Autres",
    component: () => import("../views/Autres.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/connexion",
    name: "Connexion",
    component: Connexion
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/connexion' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/connexion')
    return;
  }

  next();
})

export default router

