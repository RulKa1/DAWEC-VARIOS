<template>
  <h1>CITAS FEBRERO 2021</h1>
  <Calendario :citasCalendario="listaCitas" @mostrarTextoCita="mostrarTextoCita"/>
  <TextoCitas :listaCitasDia="citasDiaSeleccionado"/>
  <FormularioCitas @nuevaCita="guardarNuevaCita" />
</template>

<script>
import Calendario from "./components/Calendario.vue";
import TextoCitas from "./components/TextoCitas.vue";
import FormularioCitas from "./components/FormularioCitas.vue";

export default {
  name: "App",
  components: {
    Calendario,
    TextoCitas,
    FormularioCitas,
  },
  data() {
    return {
      listaCitas: [],
      citasDiaSeleccionado:[]
    };
  },
  methods: {
    guardarNuevaCita(diaCita, textoCita) {
      let posicionCita = this.listaCitas.findIndex(elemento => elemento.dia == diaCita);
      if (posicionCita == -1) {
        let nuevoDia = {
          dia: diaCita,
          citas: [textoCita]
        }
        this.listaCitas.push(nuevoDia);
      } else {
        (this.listaCitas[posicionCita]).citas.push(textoCita);
      }
    },
    mostrarTextoCita(diaCita){
      this.citasDiaSeleccionado = [];
      for (let i = 0; i < this.listaCitas.length; i++) {
        if (this.listaCitas[i].dia == diaCita) {
          this.citasDiaSeleccionado = this.listaCitas[i].citas;
        }
      }
    }
  },
};
</script>

<style>
body {
  background-color: #f8f7f4;
}
h1,
h2 {
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
