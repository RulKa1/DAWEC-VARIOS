<template>
  <div>
    <h3>Sitio Web de Sonia Gutiérrez</h3>
    <!-- Se captura el evento click sobre el elemento h4. La función manejadora está
    en la sección methods de este componente-->
    <h4 @click="cambiarTelefono">{{ mensaje }} - {{ telUser }}</h4>
    <h5>{{ dir }}</h5>
  </div>
</template>

<script>
    export default {
      name: "PiePagina",
      emits: ["cambiarTel"],
      props: ["telUser", "dir"],
      data() {
        return {
        mensaje: "Librería especializada",
        };
      },
      methods:{
        //Función manejadora del evento click capturado en el h4
        cambiarTelefono() {
            //Se emite el evento cambiarTel, definido en el componente padre App
            //con el evento se envía un parámetro que en este caso es
            //el nuevo valor que se quiere almacenar el la variable telefono del componente padre
            this.$emit('cambiarTel', 761234500);
        }
      }

    };
</script>

<style scoped>
  h2, h3, h4, h5 {
    text-align: center;
  }
  div {
    background-color: aquamarine;
    width: 100%;
  }
</style>