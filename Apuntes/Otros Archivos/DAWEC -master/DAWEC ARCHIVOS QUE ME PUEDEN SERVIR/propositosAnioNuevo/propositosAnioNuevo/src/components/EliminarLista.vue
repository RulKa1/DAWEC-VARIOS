<template>
  <div>
    <h2>Eliminar lista de propósitos</h2>
    <button @click="borrarLista" :disabled="desactivar">Borrar Lista</button>
  </div>
</template>

<script>
    export default {
      name:"BorrarLista",
      emits: ["borrarLista"],
      props: {
        desactivar: {
          type: Boolean,
          default: false
        }
      },
      methods:{
        borrarLista() {
            this.$emit('borrarLista');
        }
      }

    };
</script>
<style scoped>
  h2 {
    background-color: lightgreen;
    margin-bottom: 15px;
  }
  button {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
</style>