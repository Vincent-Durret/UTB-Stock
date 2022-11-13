
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Connexion from '../views/Connexion.vue'
import Test from '../components/Test.vue'

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
    path: "/:category",
    component: () => import("../views/Products.vue"),
    name: "Products",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:category/:title",
    component: () => import("../views/SubPage.vue"),
    name: "SubCard",
    meta: {
      requiresAuth: true,
    },
    
  },
  {
    path: "/test",
    name: "test",
    component: Test
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
    next()
    return;
  }

  next();
})

export default router

