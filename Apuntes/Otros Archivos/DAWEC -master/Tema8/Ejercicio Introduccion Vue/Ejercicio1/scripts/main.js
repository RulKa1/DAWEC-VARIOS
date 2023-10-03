const app = Vue.createApp({
    data() {
        return {
            nombre: "Diego",
            apellidos: "González Serrano",
            direccion: "Alfonso X 17 5ºD",
            telefono: 654123987,
            estadoCivil: "casado",
            numeritos: 0,
            productos: [{
                id: 1,
                nombre: 'Cuenta Nómina',
                saldo: 3597
            },
            {
                id: 2,
                nombre: 'Plan de Pensiones',
                saldo: 25432
            },
            {
                id: 3,
                nombre: 'Fondo de Inversión',
                saldo: 65198
            }
            ]
        };
    },
    methods: {
        ingresarDinero(index, cantidad) {
            if (cantidad <= 0) {
                return alert("Introduce una cantidad valida")
            }
            console.log(cantidad)
            console.log(index)
            this.productos[index].saldo += cantidad;
            this.numeritos = 0;
        }, sacarDinero(index, cantidad) {
            if (cantidad <= 0) {
                return alert("Introduce una cantidad valida")
            }
            this.productos[index].saldo -= cantidad;
            this.numeritos = 0;
        }
    }
});