const app = Vue.createApp({
    data() {
        return {
            imagenes: [
                {
                    url: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
                    sitio: "Sitio1",
                    estilos: ["bordeVerde", "menosde15"],
                    contador: 0
                }, {
                    url: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
                    sitio: "Sitio2",
                    estilos: ["bordeVerde", "menosde15"],
                    contador: 0
                }, {
                    url: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
                    sitio: "Sitio3",
                    estilos: ["bordeVerde", "menosde15"],
                    contador: 0
                }, {
                    url: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
                    sitio: "Sitio4",
                    estilos: ["bordeVerde", "menosde15"],
                    contador: 0
                }, {
                    url: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
                    sitio: "Sitio5",
                    estilos: ["bordeVerde", "menosde15"],
                    contador: 0
                }, {
                    url: "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
                    sitio: "Sitio6",
                    estilos: ["bordeVerde", "menosde15"],
                    contador: 0
                }
            ],
        };
    }, methods: {
        cambiarEstilos(event) {
            let indice = event.currentTarget.alt;
            if (this.imagenes[indice].estilos[0] == "bordeVerde") {
                this.imagenes[indice].estilos[0] = "bordeAzul";
                return;
            }
            this.imagenes[indice].estilos[0] = "bordeVerde";
        }, aumentarContador(event) {
            let indice = event.currentTarget.alt;
            this.imagenes[indice].contador++;
            if (this.imagenes[indice].contador <= 15) {
                this.imagenes[indice].estilos[1] = "menosde15";
                return;
            }
            this.imagenes[indice].estilos[1] = "masde15";
        },
        resetearContador(event) {
            let indice = event.currentTarget.alt;
            this.imagenes[indice].contador = 0;
            this.imagenes[indice].estilos[1] = "menosde15";
        }
    },
});