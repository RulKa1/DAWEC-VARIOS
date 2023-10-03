<template>
  <div>
    <h3>Añadir nueva tarea a la lista</h3>
    <div id="formNuevaTarea">
      <input type="text" v-model="tituloNuevaTarea" placeholder="Nombre tarea"/>
      <textarea cols="50" rows="4" v-model="descripcionNuevaTarea" maxlength="200" placeholder="Descripción de la tarea"></textarea>
      <input type="button" value="Crear Nueva Tarea" @click="crearNuevaTarea" />
    </div>
  </div>
</template>
<script>
export default {
  name: "FormularioNuevaTarea",
  emits: ["nuevaTarea"],
  data() {
    return {
      tituloNuevaTarea: "",
      descripcionNuevaTarea: "",
    };
  },
  methods: {
    crearNuevaTarea() {
      if (
        this.descripcionNuevaTarea != "" &&
        this.descripcionNuevaTarea != null
      ) {
        this.$emit(
          "nuevaTarea",
          this.tituloNuevaTarea,
          this.descripcionNuevaTarea
        );
        this.descripcionNuevaTarea = "";
        this.tituloNuevaTarea = "";
      } else {
        alert("Debe introducir una descripción para la nueva tarea");
      }
    },
  },
};
</script>
<style scoped>
div {
  width: 70%;
  margin: auto;
  overflow: hidden;
}

h3 {
  position: absolute;
  width: 20%;
   background-color: #FFC478;
}

#formNuevaTarea {
  padding: 5px auto;
  text-align: center;
  background-color: #75cfb8;
  border: 1px solid #f8f7f4;
}

input,
textarea {
  display: block;
  margin: 5px auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
