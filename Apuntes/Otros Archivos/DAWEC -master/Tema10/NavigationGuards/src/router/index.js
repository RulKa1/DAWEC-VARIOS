import { createRouter, createWebHistory } from "vue-router";

import Inicio from "../views/Inicio.vue";
import Bibliografia from "../views/Bibliografia.vue";
import Texto from "../views/Texto.vue";

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/bibliografia',
    name: 'Bibliografia',
    component: Bibliografia
  },
  {
    path: '/ruta/:num',
    name: 'Texto',
    component: Texto
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
