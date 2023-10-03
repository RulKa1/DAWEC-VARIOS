<template>
    <div>
        <form action="" @submit.prevent="enviarForm">
            <input type="date" v-model="nuevaCita.fecha" min="2023-02-01" max="2023-02-28">
            <input type="text" v-model="nuevaCita.texto" required maxlength="75">
            <button type="submit">Crear Nueva Cita</button>
        </form>
    </div>
</template>
<script>
export default {
    emits: ["formularioEnviado"],
    data() {
        return {
            nuevaCita: {
                texto: "",
                fecha: "01/02/2023"
            }
        }
    }, methods: {
        enviarForm() {
            this.$emit("formularioEnviado", this.nuevaCita);
            this.nuevaCita = {
                texto: "",
                fecha: "2023-02-01"
            }
        }
    },
}
</script>
<style lang="css" scoped>


</style>