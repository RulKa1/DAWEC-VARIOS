<template>
    <div>
        <form action="get" @submit.prevent="validarEnvio">
            <input type="text" name="" id="" v-model="nuevaTarea.nombre" required>
            <br>
            <textarea name="" id="" cols="30" rows="10" v-model="nuevaTarea.descripcion" required></textarea>
            <br>
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>
<script>
export default {
    emits: ["nuevaTarea"],
    data() {
        return {
            nuevaTarea: {
                nombre: "",
                descripcion: "",
                estado: "Pendiente"
            }

        }
    }, methods: {
        validarEnvio() {
            this.$emit("nuevaTarea", this.nuevaTarea);
            this.nuevaTarea = {
                nombre: "",
                descripcion: "",
                estado: "Pendiente"
            }
        }
    },
}
</script>
<style lang="css" scoped>

</style>