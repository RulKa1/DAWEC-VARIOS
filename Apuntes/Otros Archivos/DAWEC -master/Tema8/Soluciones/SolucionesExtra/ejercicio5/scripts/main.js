const MINUTOS_PARA_TRABAJO = 45;
const MINUTOS_PARA_DESCANSO = 10;

const app = Vue.createApp({
  data() {
    return {
      minutos: MINUTOS_PARA_TRABAJO,
      segundos: 0,
      accionARealizar: "trabajar", //Posibles valores: trabajar, descansar
      estadoContador: "parado" //Estado del contador. Posibles valores: iniciado, parado, pausado
    }
  },
  methods: {
    iniciar() {
      if (this.estadoContador !== "iniciado") {
        this.estadoContador = "iniciado";
        this.actualizarContador();
        this.interval = setInterval(this.actualizarContador, 1000);
      }
    },
    pausar() {
      this.estadoContador = "pausado";
      clearInterval(this.interval);
    },
    parar() {
      this.estadoContador = "parado";
      clearInterval(this.interval);
      this.accionARealizar = "trabajar";
      (this.minutos = MINUTOS_PARA_TRABAJO), (this.segundos = 0);
    },
    actualizarContador() {
      if (this.segundos !== 0) {
        this.segundos--;
        return;
      }

      if (this.minutos !== 0) {
        this.minutos--;
        this.segundos = 59;
        return;
      }

      this.accionARealizar =
        this.accionARealizar === "trabajar" ? "descansar" : "trabajar";

      if (this.accionARealizar === "trabajar") {
        this.minutos = MINUTOS_PARA_TRABAJO;
      } else {
        this.minutos = MINUTOS_PARA_DESCANSO;
      }
    }
  },
  computed: {
    minutosCalculado() {
      if (this.minutos < 10) {
        return "0" + this.minutos;
      }
      return this.minutos;
    },
    segundosCalculado() {
      if (this.segundos < 10) {
        return "0" + this.segundos;
      }
      return this.segundos;
    },
    verEstadoContador() {
      return this.estadoContador === 'iniciado';
    }
  }
});
