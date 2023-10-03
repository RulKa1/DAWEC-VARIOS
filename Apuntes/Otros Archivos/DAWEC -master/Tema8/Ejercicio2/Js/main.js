const app = Vue.createApp({
    data() {
        return {
            elemento: "texto",
            personas: [
                {
                    dni: 1234,
                    nombre: "Pepe",
                    apellido: "a"
                },
                {
                    dni: 123456789,
                    nombre: "A",
                    apellido: "B"
                }
            ]
        };
    },
    methods: {
    }
});