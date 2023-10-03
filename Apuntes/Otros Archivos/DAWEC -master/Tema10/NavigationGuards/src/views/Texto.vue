<template>
  <div>
    <h1 v-for="(texto, index) in arrayTextos" :key="index">{{ texto }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrayTextos: [],
    };
  },
  methods: {
      cargarArray (cuantos) {
            this.arrayTextos = [];
            for (let i = 0; i < cuantos; i++) {
                this.arrayTextos[i] = "Texto número " + i;
            }
      }
  },
  /**
   * Incluyendo la carga del array en la función hook created, no se refrescará dicha carga
   * cuando, por ejemplo, se cargue con push la misma ruta con un parámetro diferente.
   */
  created(){
        var cuantos = this.$route.params.num;
        this.cargarArray(cuantos);
    },
    /**
     * Sin embargo, si se está cambiando de ruta siendo el destino la misma ruta con parámetro
     * diferente, no ejecutará created(), por lo que esa falta se puede suplir con el interceptor
     * beforeRouteUpdate. 
     */
    beforeRouteUpdate(to, from, next) {
        var cuantos = to.params.num;
        this.cargarArray(cuantos);
        next();
  },
};
</script>
