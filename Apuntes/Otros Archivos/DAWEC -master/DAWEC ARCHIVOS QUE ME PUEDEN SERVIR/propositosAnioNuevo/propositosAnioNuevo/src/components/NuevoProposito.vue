<template>
<div id="nuevo">
    <h2> Nuevo propósito</h2>
    <input v-model="nuevoProp" @keyup.enter="anadirProposito">
    <button @click="anadirProposito">Añadir</button>
    </div>
</template>

<script>
    export default {
    name: "NuevoProposito",
    emits: ["nuevoProp"],
    data() {
      return {
        nuevoProp: ""
      }
    },
    methods:{
        anadirProposito() {
          if (this.nuevoProp != "" && this.nuevoProp != null) {
            this.$emit('nuevoProp', this.nuevoProp);
            this.nuevoProp = "";
          }
        }
      }
    }
</script>
<style scoped>

  h2 {
    background-color: antiquewhite;
    margin-bottom: 15px;
  }
  button {
    font-family: fantasy;
  }
#nuevo {
  clear: both;
  margin-top: 15px;
}
</style>