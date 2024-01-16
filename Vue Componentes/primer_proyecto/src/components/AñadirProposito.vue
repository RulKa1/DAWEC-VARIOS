<template>
    <div>
      <input type="text" v-model="nuevoProp" @keyup.enter="nuevoProposito">
      <button @click="nuevoProposito">Añadir Propósito</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AñadirProposito',
    data() {
      return {
        nuevoProp: ''
      };
    },
    methods: {
      nuevoProposito() {
        this.$emit('añadirProposito', this.nuevoProp);
        this.nuevoProp = '';
      }
    }
  }
  </script>
  