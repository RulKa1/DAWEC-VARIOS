<template >
    <div id="ultimasVentas">
        <table>
            <tr>
                <th>Tipo de Prenda</th>
                <th>Talla</th>
                <th>Precio de Venta</th>
            </tr>
            <tbody class="tdbodybien">
                <tr v-for="(productoVendido, index) in listaProductosVendidos" :key="index">
                    <td>{{ productoVendido.nombre }}</td>
                    <td>{{ productoVendido.talla }}</td>
                    <td>{{ productoVendido.precio }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props: {
        listaProductosVendidos: Array
    }

}
</script>
<style >

</style>