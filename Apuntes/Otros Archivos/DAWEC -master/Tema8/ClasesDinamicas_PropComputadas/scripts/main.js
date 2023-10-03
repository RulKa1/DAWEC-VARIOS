const appClases = Vue.createApp({
    data() {
      return {
        clasesH21: "fondoVerdeCentrado textoXNegritaXLarge",
        negrita: true,
        blanco: true,
        fondoVerde: true,
        fondo1: "fondoAzulDerecha",
        texto1: "textoXNegritaXLarge",
        valor: 0
      };
    }
  });

  const appComputed = Vue.createApp({
    data() {
      return {
        valor: 0
      };
    },
    methods: {
      incrementarValor() {
        this.valor++;
      },
      decrementarValor () {
        this.valor--;
      }
    },
    computed: {
      asignarClase() {
        return this.valor >= 25 ? 'fondoVerdeCentrado textoXNegritaXLarge' : 'textoBlancoNegrita fondoAzulDerecha';
    }
    }
  });
  