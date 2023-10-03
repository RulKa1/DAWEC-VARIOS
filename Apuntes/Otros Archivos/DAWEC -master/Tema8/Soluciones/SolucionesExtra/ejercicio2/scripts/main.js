const app = Vue.createApp({
  data() {
    return {
      nombre: "Diego",
      apellidos: "González Serrano",
      direccion: "Alfonso X 17 5ºD",
      telefono: 654123987,
      estadoCivil: "casado",
      productos: [
        {
          id: 1,
          nombre: "Cuenta Nómina",
          saldo: 3597,
          saldoParaAnadir: 0,
          noHaySaldo:false
        },
        {
          id: 2,
          nombre: "Plan de Pensiones",
          saldo: 25432,
          saldoParaAnadir: 0,
          noHaySaldo: false
        },
        {
          id: 3,
          nombre: "Fondo de Inversión",
          saldo: 65198,
          saldoParaAnadir: 0,
          noHaySaldo: false
        },
      ],
    };
  },
  methods: {
    ingresar (producto) {
      this.productos[producto].saldo += this.productos[producto].saldoParaAnadir;
      this.productos[producto].saldoParaAnadir = 0;
      if (this.productos[producto].saldo > 0) {
        this.productos[producto].noHaySaldo = false;
      }
    },
    sacar (producto) {
      this.productos[producto].saldo -= this.productos[producto].saldoParaAnadir;
      this.productos[producto].saldoParaAnadir = 0;
      if (this.productos[producto].saldo <= 0) {
        this.productos[producto].noHaySaldo = true;
      }
    }
  },
  computed: {
    mostrarTelefono() {
      if (this.telefono != 0 && this.telefono != null) {
        return true;
      } else {
        return false;
      }
    }
  },
});
