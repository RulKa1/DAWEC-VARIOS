/**
 * Declaración de un objeto tipo Vue.
 * Este objeto se relaciona con un elemento HTML. Esto se hace en la directiva incluida 
 * en el documento index.html: const mountedApp = appObj.mount("#app");
 */
const appObj = Vue.createApp({
    data() {
      return {
        mensaje: '¿Esto es Vue?',
        valor: 0
      };
    }
  });
  