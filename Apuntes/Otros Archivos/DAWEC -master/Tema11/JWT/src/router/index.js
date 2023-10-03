import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Personal from '../views/Personal.vue'
import InicioSesion from '../views/InicioSesion.vue'
import Registro from '../views/Registro.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/personal',
    name: 'Personal',
    meta: {
      requiresAuth: true
    },
    component: Personal
  },
  {
    path: '/inicioSesion',
    name: 'InicioSesion',
    component: InicioSesion
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
