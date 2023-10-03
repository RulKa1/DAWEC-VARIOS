<template>
  <h1>{{ mensaje }}</h1>
  <hr />
  <span> Libros disponibles:</span>
  <ListaLibros :libros="libros" @cambiarTel="actualizarTelefono"></ListaLibros>
  <hr />
  <!-- Uso de un componente importado y referenciado en la 
  sección <script>
    Se captura el evento cambiarTel, que podrán emitir sus componentes hijos.
    La función manejadora actualizarTelefono está declarada en la sección methods de este componente-->
  <PiePagina :tel-user="telefono" dir="C/Arriba 25" @cambiarTel="actualizarTelefono"/>
</template>

<script>
//Importación de los componentes que se quieran utilizar
import PiePagina from "./components/PiePagina.vue";
import ListaLibros from "./components/ListaLibros.vue";

export default {
  name: "App",
  components: {
    PiePagina,
    ListaLibros,
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
    actualizarTelefono(param) {
      this.telefono = param;
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}
</style>
