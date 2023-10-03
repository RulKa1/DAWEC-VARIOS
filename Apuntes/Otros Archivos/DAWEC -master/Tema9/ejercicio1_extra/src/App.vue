<template>
  <Calendario :lista-fechas="fechasCitas"   @dia-generar="generarLasCitasDeUnDia"/>
  <ListadoCitas :lista-citas="listasMostrar"/>
  <FormularioCitas @formulario-enviado="añadirNuevaCita"/>
</template>

<script>
import Calendario from './components/Calendario.vue'
import ListadoCitas from './components/ListadoCitas.vue'
import FormularioCitas from './components/FormularioCitas.vue'

export default {
  name: 'App',
  components: {
    Calendario,
    ListadoCitas,
    FormularioCitas
  }, data() {
    return {
      listaCitas: [
        { texto: "Prueba", fecha: "2023-02-31" }
      ], fechasCitas: ["2023-02-31"], listasMostrar: []
    }
  }, methods: {
    añadirNuevaCita(nuevaCita) {
      this.listaCitas.push(nuevaCita)
      if (!this.fechasCitas.includes(nuevaCita.fecha)) {
        this.fechasCitas.push(nuevaCita.fecha)
      }
      console.log(this.fechasCitas)
    },
    generarLasCitasDeUnDia(dia) {
      console.log(dia)
      this.listasMostrar = []
      this.listaCitas.forEach(element => {
        if (element.fecha==dia) {
          this.listasMostrar.push(element)
        }
      });
      console.log(this.listasMostrar)
    }
  },
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
