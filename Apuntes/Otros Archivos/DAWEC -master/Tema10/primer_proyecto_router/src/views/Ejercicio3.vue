<template lang="">
    <div>
        <p>Hola</p>
        <p> {{texto($route.params.id)}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    }, methods: {
        texto(ruta) {
            if (ruta == 1) {
                return "Texto1"
            }
            if (ruta == 2) {
                return "Texto2"
            }
            if (ruta == 3) {
                return "Texto3"
            }
            return "No hay valor alamanceado para " + ruta
        }
    }, computed: {
    }

}
</script>
<style lang="">
    
</style>