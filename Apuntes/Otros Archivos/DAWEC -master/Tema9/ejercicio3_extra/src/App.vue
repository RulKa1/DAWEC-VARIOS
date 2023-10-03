<template>
  <h1>GESTOR DE TAREAS</h1>
  <AñadirNuevaTarea @nuevaTarea="añadirTarea" />
  <ListadoTareas :listaTareasPendientes=tareasPendientes :listaTareasEnProceso=tareasEnProceso
    :listaTareasEnRevision=tareasRevision :listaTareasRevisadas=tareasRevisadas
    @tareapendiente="cambiarEstadoPendiente" @tareaproceso="cambiarEstadoProceso" @tareaRevision="cambiarEstadoRevision"/>

</template>

<script>
import AñadirNuevaTarea from './components/añadirNuevaTarea.vue';
import ListadoTareas from './components/listadoTareas.vue';
export default {
  name: 'App',
  components: {
    AñadirNuevaTarea, ListadoTareas
  }, data() {
    return {
      tareasPendientes: [],
      tareasEnProceso: [],
      tareasRevision: [],
      tareasRevisadas: []
    }
  }, methods: {
    añadirTarea(nuevaTarea) {
      this.tareasPendientes.push(nuevaTarea)
    },
    cambiarEstadoPendiente(index) {
      this.tareasEnProceso.push(this.tareasPendientes[index])
      this.tareasPendientes.splice(index, 1)
    },
    cambiarEstadoProceso(index) {
      this.tareasRevision.push(this.tareasEnProceso[index])
      this.tareasEnProceso.splice(index, 1)
    },
    cambiarEstadoRevision(index) {
      this.tareasRevisadas.push(this.tareasRevision[index])
      this.tareasRevision.splice(index, 1)
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
