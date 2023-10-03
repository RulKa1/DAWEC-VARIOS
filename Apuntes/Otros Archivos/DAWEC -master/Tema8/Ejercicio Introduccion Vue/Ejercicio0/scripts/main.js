const app = Vue.createApp({
    data() {
        return {
            nombre: "Luke",
            apellidos: "Skywalker",
            edad: 20,
            imagen: "https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2019/04/18/156382.jpg",
            textoImagen: "Foto de Luke Skywalker",
            estilos: false,
            enlaces: [
                "https://www.starwars.com/",
                "https://starwars.fandom.com/es/wiki/Databank_(sitio_web)",
                "https://www.lafosadelrancor.com/"
            ],
            mensaje: "A"
        };
    },
    methods: {
        numero() {
            return (Math.random());
        },
        edadMultiplicada(multiplo) {
            return this.edad * multiplo
        }


    }
});