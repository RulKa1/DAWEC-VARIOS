<template lang="">
    <div id="textoDeTodasLasVentas">
        <h2 v-show="listaProductosSinVender==0">
            Enhorabuena, parece que has vendido todas las prendas que has puesto a la venta. ¿Por qué no sigues vendiendo lo que ya no usas?
        </h2>
    </div>
</template>
<script>
export default {
    props: {
        listaProductosSinVender: Array
    }

}
</script>
<style lang="">
    
</style>