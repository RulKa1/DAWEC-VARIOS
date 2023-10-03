<template>
    <div>
        <form action="#" @submit.prevent="añadirNuevaPersona()">
            <select name="dia" id="dia" v-model="nuevaPersona.diaDeLaSemana" @change="cambioDeDia">
                <option :value="dia.nombre" v-for="(dia, index) in listaDeDiasDisponibles" :key="index">{{ dia.nombre }}
                </option>
            </select>
            <hr>
            <select name="horario" id="horario" v-model="nuevaPersona.franjaHoraria">
                <option :value="hora" v-for="(hora, index) in listaHorariosDisponible" :key="index">{{ hora }}</option>
            </select>
            <hr>
            <input type="text" name="" id="" v-model="nuevaPersona.nombre">
            <hr>
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>
<script>
export default {
    emits: ["nuevaPersona", "cambioDeDia"],
    props: {
        listaDeDiasDisponibles: Array, listaHorariosDisponible: Array
    },
    data() {
        return {
            nuevaPersona: {
                diaDeLaSemana: "",
                franjaHoraria: "",
                nombre: ""
            }
        };
    }, methods: {
        añadirNuevaPersona() {
            console.log(this.nuevaPersona)
            this.$emit('nuevaPersona', this.nuevaPersona)
            this.nuevaPersona = {
                diaDeLaSemana: "",
                franjaHoraria: "",
                nombre: ""
            }


        }, cambioDeDia() {
            this.$emit('cambioDeDia', this.nuevaPersona.diaDeLaSemana)
        }
    },
}
</script>
<style lang="css">

</style>