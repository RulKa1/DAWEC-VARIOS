<template>
  <div>
      <h1>Regístrate en nuestro sitio web</h1>
      <FormularioUsuario :iniciarSesion="false"/>
  </div>
</template>

<script>

import FormularioUsuario from "../components/FormularioUsuario.vue";

export default {
    name: "Registro",
    components: {FormularioUsuario}
};
</script>
