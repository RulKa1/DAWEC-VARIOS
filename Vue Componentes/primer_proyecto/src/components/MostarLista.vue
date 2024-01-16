<template>
    <ul>
      <li v-for="(proposito, index) in propositos" :key="index" 
          :class="proposito.hecho ? 'estiloCumplido' : 'estiloNoCumplido'">
        <label>
          <input type="checkbox" v-model="proposito.hecho">
          <del v-if="proposito.hecho" @dblclick="$emit('borrar', index)">
            {{ proposito.texto }}
          </del>
          <span v-else @dblclick="$emit('borrar', index)">
            {{ proposito.texto }}
          </span>
        </label>
      </li>
    </ul>
</template>
  
  <script>
  export default {
    name: 'MostrarLista',
    props: ['propositos']
  }
  </script>
  <style scoped>
  .estiloCumplido {
      color: green;
      text-align: right;
      font-family: 'Gill Sans', sans-serif;
  }
  
  .estiloNoCumplido {
      color: red;
      font-family: fantasy;
      list-style-type: square;
  }
  </style>
  