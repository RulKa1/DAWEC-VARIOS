<template>
  <div>
    <h1 :class="estiloTitulo">Propósitos de año nuevo:</h1>
    <ListaPropositos :propositos="propositos" @borrarProp="borrarProposito"></ListaPropositos>
    <TablaCumplidos :propositos="propositos"></TablaCumplidos>
    <br>
    <NuevoProposito @nuevoProp="anadirProposito"></NuevoProposito>
    <br>
    <BorrarLista @borrarLista="borrarLista" :desactivar="desactivar"></BorrarLista>
    <br>
  </div>
</template>

<script>
//Importación de los componentes que se quieran utilizar
import ListaPropositos from "./components/ListaPropositos.vue";
import NuevoProposito from "./components/NuevoProposito.vue";
import BorrarLista from "./components/EliminarLista.vue";
import TablaCumplidos from "./components/TablaPropositos.vue";

export default {
  name: "App",
  components: {
    ListaPropositos,
    NuevoProposito,
    BorrarLista,
    TablaCumplidos
  },
  data() {
    return {
        desactivar: false,
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
    };
  },
  methods: {
    borrarProposito(index) {
        this.propositos.splice(index, 1);
        if (this.propositos.length == 0){
          this.desactivar = true;
        }
    },
    anadirProposito(textProposito) {
        if (textProposito != "") {
            this.propositos.push({ texto: textProposito, hecho: false });
            this.desactivar = false;
        }
    },
    borrarLista() {
        if (confirm('¿Desea borrar toda la lista de propósitos?')) {
            this.propositos = [];
            this.desactivar = true;
        }
    }
  },
  computed: {
        estiloTitulo () {
            let cumplidos = 0;
            if (this.propositos.length >= 3) {
                this.propositos.forEach(prop => {
                    if (prop.hecho)
                        cumplidos++; 
                });
            }
            if (cumplidos >=3 ) {
                return cumplidos >= 5 ? "estilo4" : "estilo3";
            }
        }
    }
};
</script>

<style>
  #app {
      padding: 20px;
  }
  
.estilo3 {
  color: yellow;
  background-color: black;
  text-align: center;
}

.estilo4 {
  color: fuchsia;
  background-color: darkgreen;
  text-align: center;
}
</style>
