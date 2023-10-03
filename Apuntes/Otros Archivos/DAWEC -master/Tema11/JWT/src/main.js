import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (store.state.token != null) {
        next();
      } else {
        next({ name: "InicioSesion" });
      }
    } else {
      next();
    }
});

createApp(App).use(store).use(router).mount('#app')
