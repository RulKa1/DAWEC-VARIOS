const app = Vue.createApp({
    data() {
        return {
            nombre: "Diego",
            contraseña: "a",
            contraseñaLogin: "",
            nombreLogin: "",
            verContraseña: false,
            verMasTexto: false,
            login: false,
            continuar: true,
            reset: false,
            estado: "parado",
            segundos: 0,
            minutos: 45,
            estudio: true
        };
    }, methods: {
        cambiarEstadoContraseña() {
            this.verContraseña = !this.verContraseña;
        }, cambiarEstadoVerMas() {
            this.verMasTexto = !this.verMasTexto
        }, comprobarUsuario() {
            if (this.nombre == this.nombreLogin && this.contraseña == this.contraseñaLogin) {
                this.login = true;
            }
            console.log(this.login)
        },
        tiempoIntervalo() {
            let vue = this
            vue.continuar = true
            vue.estado = "activo"
            var x = setInterval(function () {
                console.log(vue)
                if (vue.minutos == 0 && vue.segundos == 1) {
                    vue.estudio = !vue.estudio
                    vue.estado = "parado"
                    if (vue.estudio == true) {
                        vue.segundos = 1;
                        vue.minutos = 45;
                        vue.reset = false;
                    } else {
                        vue.segundos = 1;
                        vue.minutos = 10;
                    }
                    clearInterval(x);
                }
                if (vue.reset == true) {
                    vue.segundos = 1;
                    vue.minutos = 45;
                    vue.reset = false;
                    clearInterval(x);
                }
                if (vue.segundos == 0 && vue.continuar == true) {
                    vue.segundos = 60;
                    vue.minutos--;
                }
                if (vue.continuar == true) {
                    vue.segundos--;
                }
                if (vue.continuar == false) {
                    clearInterval(x)
                }
            }, 1000)
        }, pararTiempo() {
            this.estado = "pausado"
            this.continuar = false
        }, resetearContador() {
            this.estado = "parado"
            this.reset = true
        }
    },
});