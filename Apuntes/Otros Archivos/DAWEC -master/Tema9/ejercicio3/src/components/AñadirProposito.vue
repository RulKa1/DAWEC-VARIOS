<template>
    <div>
        <input type="text" id="nuevoProposito" v-model="nuevoProp" @keydown="nuevoPropositoSiLeDasAlEnter">
        <button @click.prevent="nuevoProposito">Crear Nuevo Proposito</button>
    </div>
</template>
<script>
export default {
    name: "MostarLista",
    props: { propositos: Array },

    data() {
        return {
            nuevoProp: ""
        };
    },
    methods: {
        nuevoProposito() {
            this.propositos.push({ texto: this.nuevoProp, hecho: false })
            this.nuevoProp = ""
        },
        nuevoPropositoSiLeDasAlEnter(event) {
            if (event.which == 13) {
                this.nuevoProposito()
            }
        }
    }
}


</script>