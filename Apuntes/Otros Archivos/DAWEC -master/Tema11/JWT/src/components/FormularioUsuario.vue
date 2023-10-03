<template>
  <div class="inicioSesion">
    <form @submit.prevent="enviarDatos">
      <label for="#usuario">Usuario:</label>
      <input v-model="usuario" type="text" id="usuario" required placeholder="Correo electrónico"/>
      <label for="#pass">Contraseña:</label>
      <input v-model="pass" type="password" id="pass" />
      <label v-if="!iniciarSesion" for="#passRep">Repite la contraseña:</label>
      <input
        v-if="!iniciarSesion"
        v-model="repetirPass"
        type="password"
        id="passRep"
        required
      />
      <p v-if="error != ''"> {{error}}</p>
      <input type="submit" value="inicio" />
    </form>
  </div>
</template>

<script>
/**
 * API reqrest para testear peticiones de front: https://reqres.in
 */
  import axios from "axios";

  export default {
    name:"FormularioUsuario",
    //iniciarSesion es una variable booleana cuyo valor será true en caso de que se quiera
    //iniciar sesión y false en caso de que se quiera proceder a registrarse
    props:["iniciarSesion"],
    data() {
        return {
          usuario: "",
          pass: "",
          repetirPass: "",
          error: ""
        }
    },
    methods: {
      async enviarDatos() {
        this.error = "";
        let resultado = "";
        let datosUsuario = {
            "email": this.usuario, 
            "password": this.pass };
          if (this.iniciarSesion) {
              //inicio de sesión de usuario ya registrado 
              resultado = await axios.post("https://reqres.in/api/login", datosUsuario);
          } else {
            if (this.pass === this.repetirPass) {
              //registro de nuevo usuario
              resultado = await axios.post("https://reqres.in/api/register", datosUsuario);
            } else {
              this.error = "La contraseña repetida no coincide";
            }
          }

          if (resultado.status == 201 || resultado.status == 200 ) {
            this.establecerSesion(resultado.data);
          } else {
            this.error = "Se ha producido un error en el servidor";
          }
      },
      //método para establecer sesión y redirigir a la página personal
      async establecerSesion(datosSesion){
        /**
         * Una vez establecida la sesión, el token deberá incluirse en todas las peticiones que
         * se realicen al servidor.
         * Para ello, una opción es almacenar el token desde su recepción como valor para todas
         * las peticiones axios que se vayan a realizar a partir de este momento
         */
        axios.defaults.headers.common['Authorization'] = "Bearer " + datosSesion.token;
        await this.$store.dispatch("loguearUsuario", datosSesion.token);
        this.$router.push("/personal");
      }
    }
  };
</script>

<style scoped>
* {
  box-sizing: border-box;
}

input[type="submit"] {
  display: inline-block;
  padding: 9px 14px;
  font-size: 15px;
  line-height: normal;
  color: #e6e6e6;
  text-align: center;
  border: 1px solid #e6e6e6;
  background-color: rgb(74, 119, 212);
  cursor: pointer;
  border-radius: 5px;
}

.inicioSesion {
  position: absolute;
  top: 35%;
  left: 50%;
  margin: -150px 0 0 -150px;
  width: 300px;
  height: 300px;
}

input {
  width: 100%;
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  outline: none;
  padding: 10px;
  font-size: 13px;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2),
    0 1px 1px rgba(255, 255, 255, 0.2);
  transition: box-shadow 0.5s ease;
}
input:focus {
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4),
    0 1px 1px rgba(255, 255, 255, 0.2);
}
</style>
