<template >
    <div>
        <h1>Listado Citas</h1>
        <div id="citas">
            <p v-for="(cita, index) in listaCitas" :key="index" >{{ cita.texto }} {{ cita.fecha }}
            </p>
        </div>
    </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

export default {
    props: {  listaCitas: Array },
    name: "ListadoCitas",
    data() {
        return {

        }
    }, methods: {

    }, 
}
</script>
<style lang="css">

</style>