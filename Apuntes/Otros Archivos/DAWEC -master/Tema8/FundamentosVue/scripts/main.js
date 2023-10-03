const app = Vue.createApp({
  data() {
    return {
      mensaje: "¡Hola Mundo!",
      valor: 0,
      enlace: "https://v3.vuejs.org/guide/introduction.html#what-is-vue-js",
      tipo: "1",
    };
  },
});

const lista = Vue.createApp({
  data() {
    return {
      libros: [
        { titulo: "La villa de las telas" },
        { titulo: "La isla de las tormentas" },
        { titulo: "Dime quien soy" },
      ],
    };
  },
  methods: {
    mostrarAlerta() {
      alert("Número de libros almacenados:" + this.libros.length);
    },
  },
});
