<template>
  <div id="app">
    <h2 :class="tituloClase">Propósitos de año nuevo:</h2>
    <MostrarLista :propositos="propositos" />
    <AñadirProposito @añadirProposito="manejarNuevoProposito" />
    <button @click="borrarPropositos">Borrar Todos los Propósitos</button>
  </div>
</template>

<script>
import MostrarLista from '../src/components/MostarLista.vue';
import AñadirProposito from '../src/components/AñadirProposito.vue';

export default {
  name: 'App',
  components: {
    MostrarLista,
    AñadirProposito
  },
  data() {
        return {
            nuevoProp: "",
            propositos: [{
                texto: "Hacer deporte",
                hecho: false
            }, {
                texto: "Comer mas sano",
                hecho: false
            }, {
                texto: "Viajar mas",
                hecho: true
            }]
        };
    },
  methods: {
    manejarNuevoProposito(nuevoProposito) {
      this.propositos.push({ texto: nuevoProposito, hecho: false });
    },
    borrarPropositos() {
      this.propositos = [];
    }
  },

computed: {           
    tituloClase() {
      const cumplidos = this.propositos.filter(p => p.hecho).length;
      if (cumplidos > 5) {
        return 'estiloTitulo5';
      } else if (cumplidos > 3) {
        return 'estiloTitulo3';
      }
      return '';
    }
  }
}
</script>

<style scoped>
.estiloTitulo3 {
    color: yellow;
    background-color: black;
    text-align: center;
}

.estiloTitulo5 {
    color: pink;
    background-color: darkgreen;
    text-align: center;
}
</style>