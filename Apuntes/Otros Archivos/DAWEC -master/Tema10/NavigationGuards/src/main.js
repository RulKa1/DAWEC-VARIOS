import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

/*
    Con beforeEach indicamos que el contenido de la función callback se ejecute
    cada vez que se vaya a realizar un cambio de ruta. En este caso, se está mostrando
     información en un mensaje antes de cargar esa nueva ruta.
    La nueva ruta no se cargará hasta que no se ejecute next().
*/
router.beforeEach((to, from, next) => {
    alert("La ruta a la que se está redirigiendo es " + to.name + ": "+ to.path); 
    next();
  });

createApp(App).use(router).mount('#app')
