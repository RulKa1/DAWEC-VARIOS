<template>
  <div>
    <table>
      <tr>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miércoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
        <th>Sábado</th>
        <th>Domingo</th>
      </tr>
      <tr v-for="(semana, indexS) in 4" :key="indexS">
        <td
          v-for="(dia, indexD) in 7"
          :key="indexD"
          :class="asignarClase(dia + 7 * indexS)"
          @click="mostrarCita(dia + 7 * indexS)"
        >
          {{ dia + 7 * indexS }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "Calendario",
  props: ["citasCalendario"],
  emits: ["mostrarTextoCita"],
  data() {
    return {
      diaSeleccionado: -1,
    };
  },
  methods: {
    asignarClase(diaAComprobar) {
      for (let i = 0; i < this.citasCalendario.length; i++) {
        if (this.citasCalendario[i].dia == diaAComprobar) {
          if (diaAComprobar == this.diaSeleccionado) {
            return "diaConCita fondoVerde";
          }
          return "diaConCita";
        }
      }
    },
    mostrarCita(diaCita) {
      this.$emit("mostrarTextoCita", diaCita);
      this.diaSeleccionado = diaCita;
    },
  },
};
</script>
<style scoped>
div {
  width: 60%;
  float: left;
  overflow: hidden;
}

table {
  width: 100%;
  table-layout: fixed;
    border: 1px solid black;
}

td,
th {
  border: 1px solid black;
  text-align: center;
  height: 50px;
}

.diaConCita {
  color: red;
  font-size: x-large;
}

.fondoVerde {
  background-color: green;
}
</style>
