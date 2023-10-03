<template>
  <div class="home">
    <div>
      <h1>Bienvenido a tu página personal</h1>
      <p v-if="datosPersonales.nombre != ''">
        <span>{{datosPersonales.nombre}}</span>
        <span>{{datosPersonales.apellidos}}</span>
        <span>{{datosPersonales.correo}}</span>
      </p>
      <input
        type="button"
        @click="getDatosPersonales"
        value="Ver datos personales"
      />
      <input type="button" @click="cerrarSesion" value="Cerrar Sesión" />
    </div>
  </div>
</template>

<script>
  import axios from "axios";

export default {
  name: "Personal",
  data() {
    return {
      datosPersonales:{
        nombre: "",
        apellidos: "",
        correo: ""
      }
    }
  },
  methods: {
    async getDatosPersonales() {
      let resultado = await axios.get("https://reqres.in/api/users/2");;
      this.datosPersonales.nombre = resultado.data.data.first_name;
      this.datosPersonales.apellidos = resultado.data.data.last_name;
      this.datosPersonales.correo = resultado.data.data.email;
    },
    cerrarSesion() {
      this.$store.dispatch("cerrarSesion");
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
p {
  width: 65%;
  padding: 2%;
  margin: auto;
  margin-bottom: 25px;
  color: #e6e6e6;
  text-align: center;
  border: 1px solid #e6e6e6;
  background-color: rgb(74, 119, 212);
  border-radius: 15px 55px;
}

span {
  display: inline-block;
  width: 75%;
  margin: aunto;
  padding-top: 15px;
}
</style>
