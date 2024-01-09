const app = Vue.createApp({
    data() {
        return {
            nombreNuevo: "",
            colorNuevo: "#000000",
            tallaNueva: "L",
            precioPrendaNuevo: "",
            listaTallas: ["L", "XL", "M", "S", "XS"],
            listaProductosSinVender: [],
            listaProductosVendidos: []
        };
    },
    methods: {
        crearNuevaPrenda() {
            if (this.colorNuevo == "" || this.tallaNueva == "" || this.precioPrendaNuevo == "" || this.nombreNuevo == "") {
                return alert("Complete su producto")
            }
            let nuevaPrenda = {
                nombre: this.nombreNuevo,
                color: this.colorNuevo,
                precio: this.precioPrendaNuevo,
                talla: this.tallaNueva,
                modificar: false,
                nuevoPrecio: this.precioPrendaNuevo
            }
            this.listaProductosSinVender.push(nuevaPrenda)
            this.colorNuevo = "#000000"
            this.tallaNueva = "L"
            this.precioPrendaNuevo = ""
            this.nombreNuevo = ""
        }, iniciarModificacion(index) {
            this.listaProductosSinVender[index].modificar = true
        }, guardar(index) {
            this.listaProductosSinVender[index].precio = this.listaProductosSinVender[index].precioPrendaNuevo
            this.listaProductosSinVender[index].modificar = false
        }, venderProducto(index) {
            if (this.listaProductosVendidos.length == 6) {
                this.listaProductosVendidos.splice(0, 1)
            }
            this.listaProductosVendidos.push(this.listaProductosSinVender[index]);
            this.listaProductosSinVender.splice(index, 1)
        }
    }
});