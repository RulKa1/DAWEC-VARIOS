<template>
  <div>
          <h1>Inicia sesión</h1>
      <FormularioUsuario :iniciarSesion="true"/>
  </div>
</template>

<script>

import FormularioUsuario from "../components/FormularioUsuario.vue";

export default {
    name: "InicioSesion",
    components: {FormularioUsuario}
};
</script>