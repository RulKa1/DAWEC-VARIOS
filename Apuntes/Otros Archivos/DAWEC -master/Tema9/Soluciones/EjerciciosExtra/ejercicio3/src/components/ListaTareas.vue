<template >
     <div id="divTareasPorEstado">
      <h2>{{textoCabecera}}</h2>
      <div class="gestionVisibilidad">
        <Tarea
          v-for="(tareaMostrar, index) in tareasAMostrar"
          :key="index"
          :tarea="tareaMostrar"
          :finalizada="estaFinalizada"
          @cambiarEstado="cambiarEstadoTarea"
        />
      </div>
    </div>
</template>
<script>
import Tarea from "./Tarea.vue";

export default {
    name:"listatareas",
    components:{Tarea},
    props:["tareasAMostrar","estado"],
    emits:["cambiarEstado"],
    methods: {
        cambiarEstadoTarea(idTarea) {
            this.$emit("cambiarEstado", idTarea);
        }
    },
    computed: {
        textoCabecera () {
            console.log(this.estado);
            if (this.estado == 0) {
                return "Tareas Pendientes";
            }
            if (this.estado == 1) {
                return "Tareas en Proceso";
            }
            if (this.estado == 2) {
                return "Tareas por Revisar";
            }
            return "Tareas Revisadas"; 
        },
        estaFinalizada() {
            if (this.estado == 3) {
                return true;
            }
            return false;
        }
    }
}
</script>
<style>
    
#divTareasPorEstado {
  width: 25%;
  float: left;
}
</style>