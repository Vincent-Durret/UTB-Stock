import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Connexion from '../views/Connexion.vue'
import Products from '../views/Products.vue'
import SubPage from '../views/SubPage.vue'

// import PageNotFound from '../components/PageNotFound.vue'

// import { auth } from '../Firebase/firebase.js'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/:category',
    component: Products,
    name: 'Products',
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: '/:category/:name',
    component: SubPage,
    name: 'SubPage',
    // meta: {
    //   requiresAuth: true,
    // },
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: PageNotFound,
  // },

  {
    path: '/connexion',
    name: 'Connexion',
    component: Connexion,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

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

export default router
