<template>
  <div id="contenedor">
    <h3>Citas programadas: </h3>  
    <div id="divCitas">
      <p v-for="(cita, index) in listaCitasDia" :key="index">
        {{ cita }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TextoCitas",
  props: ["listaCitasDia"],
};
</script>
<style scoped>
#contenedor {
    box-sizing: border-box;
  width: 40%;
  height: 250px;
  float: right;
  padding: 15px;
}

#divCitas {
    box-sizing: border-box;
    height: 200px;
      overflow: auto;
    border: 4px green solid;
}
</style>
