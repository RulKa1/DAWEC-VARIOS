<template>
  <h1>GESTOR DE TAREAS</h1>
  <FormularioTarea @nuevaTarea="almacenarNuevaTarea" />
  <div id="divTareas" >
    <ListaTareas :tareasAMostrar="tareasPendientes" estado="0" @cambiarEstado="cambiarEstadoTarea"></ListaTareas>
    <ListaTareas :tareasAMostrar="tareasEnProceso" estado="1" @cambiarEstado="cambiarEstadoTarea"></ListaTareas>
    <ListaTareas :tareasAMostrar="tareasPorRevisar" estado="2" @cambiarEstado="cambiarEstadoTarea"></ListaTareas>
    <ListaTareas :tareasAMostrar="tareasRevisadas" estado="3" @cambiarEstado="cambiarEstadoTarea"></ListaTareas>
  </div>
</template>

<script>

class DatosTarea {
  constructor(id, titulo, tarea, estado) {
    this.id = id;
    this.titulo = titulo;
    this.tarea = tarea;
    this.estado = estado;
  }
}

import FormularioTarea from "./components/FormularioNuevaTarea.vue";
import ListaTareas from "./components/ListaTareas.vue";

export default {
  name: "App",
  components: {
    FormularioTarea,
    ListaTareas
  },
  data() {
    return {
      listaTareas: [],
      //Opciones de estado: 
      //PENDIENTE = 0, EN_PROCESO = 1, POR_REVISAR = 2, REVISADA = 3
    };
  },
  methods: {
    almacenarNuevaTarea(tituloNuevaTarea, descripcionNuevaTarea) {
      let idNuevaTarea = this.listaTareas.length;
      let nuevaTarea = new DatosTarea(
        idNuevaTarea,
        tituloNuevaTarea,
        descripcionNuevaTarea,
        0
      );
      this.listaTareas.push(nuevaTarea);
    },
    cambiarEstadoTarea(idTarea) {
      switch (this.listaTareas[idTarea].estado) {
        case 0:
          this.listaTareas[idTarea].estado = 1;
          break;
        case 1:
          this.listaTareas[idTarea].estado = 2;
          break;
        case 2:
          this.listaTareas[idTarea].estado = 3;
          break;
      }
    },
  },
  computed: {
    tareasPendientes() {
      let listaTareasPendientes = this.listaTareas.filter(
        (elemTarea) => elemTarea.estado == 0
      );
      return listaTareasPendientes;
    },
    tareasEnProceso() {
      let listaTareasEnProceso = this.listaTareas.filter(
        (elemTarea) => elemTarea.estado == 1
      );
      return listaTareasEnProceso;
    },
    tareasPorRevisar() {
      let listaTareasPorRevisar = this.listaTareas.filter(
        (elemTarea) => elemTarea.estado == 2
      );
      return listaTareasPorRevisar;
    },
    tareasRevisadas() {
      let listaTareasRevisadas = this.listaTareas.filter(
        (elemTarea) => elemTarea.estado == 3
      );
      return listaTareasRevisadas;
    },
  },
};
</script>

<style>
body {
  background-color: #F8F7F4;
}

* {
  border-radius: 5px 5px;
}

h1,
h2 {
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #75CFB8;
  background-color: #F0E5D8;
}

FormularioTarea,
#divTareas {
  width: 95%;
  margin: auto;
  overflow: hidden;
}
FormularioTarea, h2 {
border: 1px solid #F8F7F4;
}
</style>
