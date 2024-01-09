/**
 * En esta opción de solución se ha creado un solo objeto Vue,
 * pero es perfectamente posible crear dos.
 */
const app = Vue.createApp({
    data() {
        return {
            elemento: "texto",
            texto: "Esto es un span",
            personas: [{
                    dni: "78978654T",
                    nombre: "Elena",
                    apellidos: "Serrano Pérez"
                },
                {
                    dni: "71232123E",
                    nombre: "Montserrat",
                    apellidos: "Villena Domínguez"
                },
                {
                    dni: "49089712R",
                    nombre: "Juan",
                    apellidos: "González Ruiz"
                },
                {
                    dni: "64321349I",
                    nombre: "Laura",
                    apellidos: "Gómez Cruz"
                },
            ]
        };
    },
});