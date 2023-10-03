<template>

<h1>Formulario</h1>

<div id="formulario">

  <form v-on:submit.prevent="formData" @submit.prevent="submitForm">

    <label for="prenda">Prenda:</label>
    <input type="text" id="prenda" v-model="form.prenda">
    <br> <br>
    <label for="color">Color:</label>
    <input type="color" id="color" v-model="form.color">
    <br> <br>
    <label for="talla">Talla:</label>
    <input type="text" id="talla" v-model="form.talla">
    <br> <br>
    <label for="precio">Precio:</label>
    <input type="number" id="precio" v-model="form.precio">
    <br> <br>
    <button type="submit">Enviar</button>
  </form>

</div>

  <table>
    <thead>
      <tr>
        <th>Prenda</th>
        <th>Color</th>
        <th>Talla</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>

{{ datosFormulario }}

      <tr v-for="(dato, index) in datosFormulario" v-bind:key="index">
        <td>{{ dato.prenda }}</td>
        <td>{{ dato.color }}</td>
        <td>{{ dato.talla }}</td>
        <td>{{ dato.precio }}</td>
      </tr>
    </tbody>
  </table>





  
</template>

<script>


export default {
  name: 'HelloWorld',

  data:function(){
    
    return{
      form: {
      "prenda": "",
      "color": "",
      "talla": "",
      "precio": ""
    },
    datosFormulario: []
  }
  
  },
  methods: {
    submitForm() {
      const nuevoObjeto = {
        prenda: this.formData.prenda,
        color: this.formData.color,
        talla: this.formData.talla,
        precio: this.formData.precio
      };
      this.datosFormulario.push(nuevoObjeto);
      this.formData.prenda = "";
      this.formData.color = "";
      this.formData.talla = "";
      this.formData.precio = "";
    }
  }
}

</script>

<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#color{
  width: 170px;
}

#formulario{
  background-color: #42b983;
  padding: 15px;
}

table, th, td {
  border: 1px solid black;
}


</style>


