import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ejercicio3 from '../views/Ejercicio3.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/bibliografia',
    name: 'bibliografia',
    component: () => import('../views/Bibliografia.vue')
  }, {
    path: '/:id',
    name: 'pathName',
    components: { default: HomeView },
    props: {
      default: true
    }
  }, {
    path: '/ejercicio3/:id',
    name: 'ejercio3',
    component: () => import('../views/Ejercicio3.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
