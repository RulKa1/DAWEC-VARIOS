<template>
  <MostrarLista :propositos="propositos"></MostrarLista>
  <AñadirProposito :propositos="propositos"></AñadirProposito>
  <button @click="borrarTodosElementosArray">Borrar Propositos</button>

</template>

<script>
import MostrarLista from './components/MostrarLista.vue'
import AñadirProposito from './components/AñadirProposito.vue'
export default {
  name: 'App',
  components: {
    MostrarLista, AñadirProposito
  }, data() {
    return {
      propositos: [{
        texto: "Hacer deporte",
        hecho: false
      }, {
        texto: "Comer mas sano",
        hecho: false
      }, {
        texto: "Viajar mas",
        hecho: true
      }],
    }
  }, methods: {
    borrarTodosElementosArray() {
      let borrar = confirm("Quieres borrar el array?")
      if (borrar == true) {
        this.propositos = [];
      }
    }

  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
