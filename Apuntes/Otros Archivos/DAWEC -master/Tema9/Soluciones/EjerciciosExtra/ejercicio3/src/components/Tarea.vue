<template>
  <div>
    <h3>
      {{ tarea.titulo }}
      <button v-if="!finalizada" @click="pasarAlSiguienteEstado">
        <img src="../assets/iconoChecked.png" />
      </button>
    </h3>
    <p>{{ tarea.tarea }}</p>
  </div>
</template>

<script>
export default {
  props: ["tarea", "finalizada"],
  methods: {
    pasarAlSiguienteEstado() {
      this.$emit("cambiarEstado", this.tarea.id);
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid F8F7F4;
  background-color: #75cfb8;
  margin: 2px;
  overflow: hidden;
}

img {
  background-color: #75cfb8;
}
</style>
