<template>
  <div>
    <h3>Introduzca los datos necesarios para la cita</h3>
    <label for="diacita">Fecha</label>
    <input
      id="diacita"
      type="date"
      min="2021-02-01"
      max="2021-02-28"
      v-model="diaNuevaCita"
    />
    <label for="nuevaCita">Motivo de la cita</label>
    <textarea
      id="nuevaCita"
      cols="30"
      rows="4"
      maxlength="75"
      v-model="textoNuevaCita"
    />
    <input type="button" value="Guardar Cita" @click="almacenarNuevaCita()" />
  </div>
</template>
<script>
export default {
  name: "FormularioCitas",
  emits: ["nuevaCita"],
  data() {
    return {
      textoNuevaCita: "",
      diaNuevaCita: "",
    };
  },
  methods: {
    almacenarNuevaCita() {
      if (this.diaNuevaCita != "" && this.textoNuevaCita != "") {
        let fecha = new Date(this.diaNuevaCita);
        this.$emit("nuevaCita", fecha.getDate(), this.textoNuevaCita);
        this.diaNuevaCita = "";
        this.textoNuevaCita = "";
      } else {
          alert("Debe indicar una fecha y un motivo para poder establecer una cita");
      }
    },
  },
};
</script>
<style scoped>
div {
  clear: both;
  width: 40%;
  margin: auto;
  padding-top: 55px;
}
textarea,
input {
  display: inline-block;
  padding: 5px;
}

label {
  display: block;
  padding: 5px;
}

input[type="button"] {
  display: block;
  margin-top: 15px;
  width: 40%;
  border-radius: 10px;
}
</style>
