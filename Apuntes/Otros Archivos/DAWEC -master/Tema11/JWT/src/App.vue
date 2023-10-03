<template>
  <div>
    <div id="nav">
      <router-link to="/"> Inicio </router-link> |
      <router-link to="/personal"> Página personal </router-link> |
      <router-link to="/registro"> Registrarse </router-link> |
      <router-link to="/inicioSesion"> Iniciar sesión </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgb(74, 119, 212);
}

h1 {
  color: #fdf9f9;
  text-shadow: 0 0 10px rgb(74, 119, 212);
  letter-spacing: 1px;
  text-align: center;
  margin-top: 2%;
}

</style>
