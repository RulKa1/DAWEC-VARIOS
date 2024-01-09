const app = Vue.createApp({
    data() {
        return {
            usuario: "",
            passwd: "",
            mostrarPass: false,
            mostrarMasTexto: false
        }
    },
    methods: {
        cambiarMostrarPass () {
            this.mostrarPass = !this.mostrarPass;
        },
        cambiarMostrarMasTexto () {
            this.mostrarMasTexto = !this.mostrarMasTexto;
        }
    },
    computed: {
        textoMostrarMas () {
            return this.mostrarMasTexto ? 'Ver menos' : 'Ver mas';
        }
    }
});