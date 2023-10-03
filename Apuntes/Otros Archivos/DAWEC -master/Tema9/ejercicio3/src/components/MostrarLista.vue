<template>
    <ul>
        <li v-for="(proposito, index) in propositos" :key="index" @dblclick="borrarProposito(index)">
            <p>{{ proposito.texto }}</p>
            <input type="checkbox" :title="proposito.texto" v-model="proposito.hecho">
        </li>
    </ul>
</template>
<script>
export default {
    name: "MostarLista",
    props: ["propositos"],

    data() {
        return {};
    },
    methods: {
        asignarEstilosLista() {
            return "a";
        },borrarProposito(index){
            this.propositos.splice(index, 1)
        }
    }
}


</script>
