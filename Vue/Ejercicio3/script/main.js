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
    }, methods: {
        borrarPropositos() {
            let borrar = confirm("Desea Borrar Todos los propositos")
            if (borrar == true) {
                this.propositos = []
                return console.log(this.propositos)
            }
            return console.log(this.propositos)
        },
        borrarProposito(event) {
            console.log(event.target)
            let x = null;
            this.propositos.forEach((element, index) => {
                if (element.texto == event.target.innerText) {
                    this.propositos.splice(index, 1)
                }
            });
        }, nuevoProposito() {
            if (this.nuevoProp == "") {
                console.log(this.nuevoProp)
                return alert("Mete Texto")
            }
            let nuevoPropositoArray = { texto: this.nuevoProp, hecho: false }
            this.propositos.push(nuevoPropositoArray)
        }
    }, computed: {
        asignarEstilos() {
            console.log(this.propositos.length)
            if (this.propositos.length > 3 && this.propositos.length <= 5) {
                return "punto3"
            }
            if (this.propositos.length > 5) {
                return "punto4"

            }
            return ""
        }, asignarEstilosLista() {
            let arrayEstilos = [];
            this.propositos.forEach(proposito => {
                if (proposito.hecho == true) {
                    arrayEstilos.push("punto1")
                } else {
                    arrayEstilos.push("punto2")
                }
            });
            return arrayEstilos;
        }
    }
})

