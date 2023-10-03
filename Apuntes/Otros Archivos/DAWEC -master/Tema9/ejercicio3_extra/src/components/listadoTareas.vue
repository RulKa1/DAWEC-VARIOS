<template>
    <div class="grid-4">
        <div>
            <div>Tareas Pendientes</div>
            <div v-for="(tarea, index) in listaTareasPendientes" :key="index"><button
                    @click.prevent="cambiarEstadoPendiente(index)">CHECK</button>{{ tarea }}</div>
        </div>
        <div>
            <div>Tareas En Proceso</div>
            <div v-for="(tarea, index) in listaTareasEnProceso" :key="index"><button
                    @click.prevent="cambiarEstadoProceso(index)">CHECK</button>{{ tarea }}</div>
        </div>
        <div>
            <div>Tareas Para Revision</div>
            <div v-for="(tarea, index) in listaTareasEnRevision" :key="index"><button
                    @click.prevent="cambiarEstadoRevision(index)">CHECK</button>{{ tarea }}</div>
        </div>
        <div>
            <div>Tareas Revisadas</div>
            <div v-for="(tarea, index) in listaTareasRevisadas" :key="index">{{ tarea }}</div>
        </div>
    </div>
</template>
<script>
export default {
    props: { listaTareasPendientes: Array, listaTareasEnProceso: Array, listaTareasEnRevision: Array, listaTareasRevisadas: Array },
    emits: ["tareapendiente", "tareaproceso", "tareaRevision"],
    methods: {
        cambiarEstadoPendiente(index) {
            this.$emit('tareapendiente', index)
        }, cambiarEstadoProceso(index) {
            this.$emit('tareaproceso', index)
        }, cambiarEstadoRevision(index) {
            this.$emit('tareaRevision', index)
        }
    },
}
</script>
<style lang="css">
.grid-4 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>