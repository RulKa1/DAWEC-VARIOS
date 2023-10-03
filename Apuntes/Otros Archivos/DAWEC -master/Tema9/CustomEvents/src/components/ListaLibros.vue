<template>
    <ol v-if="libros.length > 0">
      <li v-for="(libro, index) in libros" :key="index" @mouseover="cambiarTelefono(index)">
        {{ libro.titulo }}
      </li>
    </ol>
    <hr />
</template>

<script>
    export default {
    name: "ListaLibros",
    emits: ["cambiarTel"],
    props:["libros"],
    methods:{
        cambiarTelefono(index) {
            //Se emite el evento cambiarTel, definido en el componente padre App
            //con el evento se envía un parámetro que en este caso es
            //el nuevo valor que se quiere almacenar el la variable telefono del componente padre
            this.$emit('cambiarTel', index);
        }
      }
    }
</script>