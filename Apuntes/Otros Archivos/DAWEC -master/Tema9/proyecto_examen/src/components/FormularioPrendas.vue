<template lang="">
        <div id="registrarNuevaPrenda">
            <form action="" @submit.prevent="crearNuevaPrenda">
                <label for="nombrePrenda">Prenda</label>
                <input type="text" name="nombrePrenda" id="nombrePrenda" v-model="nuevaPrenda.nombreNuevo">
                <label for="colorPrenda">Color</label>
                <input type="color" name="colorPrenda" id="colorPrenda" v-model="nuevaPrenda.colorNuevo">
                <label for="talla">Talla</label>
                <select name="talla" id="talla" v-model="nuevaPrenda.tallaNueva">
                    <option v-for="(talla, index) in listaTallas" :key="index" >{{talla}}
                    </option>
                </select>
                <label for="precioPrenda">Precio</label>
                <input type="text" name="precioPrenda" id="precioPrenda" v-model="nuevaPrenda.precioPrendaNuevo">
                <button type="submit">Dar de alta</button>
            </form>
        </div>
</template>
<script>
export default {
    emits: ["nuevaPrendaParaAlmacenar"],
    data() {
        return {
            listaTallas: ["L", "XL", "M", "S", "XS"],
            nuevaPrenda: {
                nombreNuevo: "",
                colorNuevo: "#000000",
                tallaNueva: "L",
                precioPrendaNuevo: "",
                modificar: false,
            }
        }
    }, methods: {
        crearNuevaPrenda() {
            if (this.nuevaPrenda.colorNuevo == "" || this.nuevaPrenda.tallaNueva == "" || this.nuevaPrenda.precioPrendaNuevo == "" || this.nuevaPrenda.nombreNuevo == "") {
                return alert("Complete su producto")
            }
            this.$emit("nuevaPrendaParaAlmacenar", this.nuevaPrenda)
            this.nuevaPrenda = {
                nombreNuevo: "",
                colorNuevo: "#000000",
                tallaNueva: "L",
                precioPrendaNuevo: "",
                modificar: false,
            }

        }
    },

}
</script>
<style lang="">
    
</style>