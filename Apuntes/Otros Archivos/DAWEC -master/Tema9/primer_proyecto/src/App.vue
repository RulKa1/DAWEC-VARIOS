<template>
  <PiePagina :tel-user="telefono" dir="C/Abajo" />
  <h1>{{ mensaje }}</h1>
  <hr />
  <span> Libros disponibles:</span>
  <ListaLibros :libros="libros"></ListaLibros>
  <hr />
  <!-- Uso de un componente importado y referenciado en la 
  sección <script>-->
  <PiePagina :tel-user="telefono" dir="C/Arriba 25" />
</template>

<script>
//Importación de los componentes que se quieran utilizar
import PiePagina from "./components/PiePagina.vue";
import ListaLibros from "./components/ListaLibros.vue";

export default {
  name: "App",
  components: {
    PiePagina, ListaLibros
  },
  data() {
    return {
      mensaje: "Librería Mi Mundo de Papel",
      telefono: 923451111,
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
  }
}
</script>

<style>
h1 {
  text-align: center;
}
</style>
