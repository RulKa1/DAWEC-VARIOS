<template>
  <div>
    <Titulo />
    <div id="nav">
      <router-link to="/" class="seccion">Inicio</router-link>
      <router-link to="/bibliografia" class="seccion">Bibliografía</router-link>
      <input type="number" v-model="numeroPag"><br>
      <input type="button" @click="cargarRuta" value="Cargar Ruta">
    </div>
    <div id="vistas">
      <router-view />
    </div>
  </div>
</template>

<script>
import Titulo from "./components/Titulo.vue";
export default {
  name: "Inicio",
  components: {
    Titulo,
  },
  data () {
    return {
      numeroPag: 0
    }
  },
  methods : {
    cargarRuta() {
      this.$router.push({name:"Texto", params: {num:this.numeroPag}});
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#vistas {
  float: right;
  width: 80%;
  box-sizing: border-box;
  padding: 30px;
}

.seccion {
  display: block;
  padding: 50 0;
}

#nav {
  float: left;
  width: 20%;
  position: absolute;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 30px;
  padding-top: 150px;
  background-color: aliceblue;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
