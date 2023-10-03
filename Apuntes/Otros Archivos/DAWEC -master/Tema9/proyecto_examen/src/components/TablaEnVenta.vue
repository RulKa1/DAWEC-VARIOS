<template lang="">
    <div id="gestionPrendas">
        <table>
                <tr>
                    <th>Prenda</th>
                    <th>Talla</th>
                    <th>Precio</th>
                    <th>Accion</th>
                    <th>Vender</th>
                </tr>
                <tbody class="tdbodybien">
                    <tr v-for="(prendaSinvender, index) in listaProductosSinVender" :key="index">
                        <td>{{prendaSinvender.nombre}}</td>
                        <td>{{prendaSinvender.talla}}</td>
                        <td v-if="!prendaSinvender.modificar">
                            <input type="text" name="precioTalla" v-model="prendaSinvender.precio"
                                :disabled="!prendaSinvender.modificar">
                        </td>
                        <td v-if="prendaSinvender.modificar">
                            <input type="text" name="precioTalla" v-model="prendaSinvender.nuevoPrecio"
                                :disabled="!prendaSinvender.modificar">
                        </td>
                        <td>
                            <button v-show="!prendaSinvender.modificar"
                                @click="iniciarModificacion(index)">Modificar</button>
                            <button v-show="prendaSinvender.modificar" @click="guardar(index)">Guardar</button>
                        </td>
                        <td><button @click="venderProducto(index)">Vender</button></td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>
<script>
export default {
    emits: ["ventaProducto"],
    props: {
        listaProductosSinVender: Array
    }, data() {
        return {
        }
    }, methods: {
        iniciarModificacion(indice) {
            this.listaProductosSinVender[indice].modificar = true
            this.precioEditar = this.listaProductosSinVender[indice].precio;
        },
        guardar(indice) {
            this.listaProductosSinVender[indice].precio = this.listaProductosSinVender[indice].nuevoPrecio
            this.listaProductosSinVender[indice].modificar = false
        },
        venderProducto(indice) {
            this.$emit("ventaProducto", indice)
        }
    },

}
</script>
<style lang="">
    
</style>