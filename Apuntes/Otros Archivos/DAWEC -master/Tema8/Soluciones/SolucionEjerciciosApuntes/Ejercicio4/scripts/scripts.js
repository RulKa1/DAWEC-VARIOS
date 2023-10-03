const app = Vue.createApp({
    data() {
        return {
            nuevoProp: "",
            propositos: [{
                texto: "Hacer deporte",
                hecho: false
            }, {
                texto: "Comer mas sano",
                hecho: false
            }, {
                texto: "Viajar mas",
                hecho: true
            }]
        };
    },
    methods: {
        borrarProposito(index) {
            this.propositos.splice(index, 1);
        },
        anadirProposito() {
            if (this.nuevoProp != "") {
                this.propositos.push({ texto: this.nuevoProp, hecho: false });
                this.nuevoProp = "";
            }
        },
        borrarPropositos() {
            if (confirm('¿Desea borrar toda la lista de propósitos?')) {
                this.propositos = [];
            }
        }
    },
    computed: {
        estiloTitulo () {
            let cumplidos = 0;
            if (this.propositos.length >= 3) {
                this.propositos.forEach(prop => {
                    if (prop.hecho)
                        cumplidos++; 
                });
            }
            if (cumplidos >3 ) {
                return cumplidos > 5 ? "estilo4" : "estilo3";
            } else {
                return "";
            }
        }
    }
});