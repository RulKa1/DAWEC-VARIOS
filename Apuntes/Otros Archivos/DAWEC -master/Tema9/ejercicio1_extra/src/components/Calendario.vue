<template >
    <h1 class="text-center mb-5">Calendario Febrero 2023</h1>
    <div class="row-7 mb-5 mt-5">
        <p>Lunes</p>
        <p>Martes</p>
        <p>Miercoles</p>
        <p>Jueves</p>
        <p>Viernes</p>
        <p>Sabado</p>
        <p>Domingo</p>
        <div v-for="(item, index) in calendario" :key="index" :class="aplicarEstilos[index] " @dblclick="diaNuevoCitas(index)">
            {{ item.dia }}
        </div>
    </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

export default {

    name: "Calendario",
    props: { listaFechas: Array },
    emits: ["dia-generar"],
    data() {
        
        return {
            calendario: [
                { dia: 1, fecha: "2023-02-01" },
                { dia: 2, fecha: "2023-02-02" },
                { dia: 3, fecha: "2023-02-03" },
                { dia: 4, fecha: "2023-02-04" },
                { dia: 5, fecha: "2023-02-05" },
                { dia: 6, fecha: "2023-02-06" },
                { dia: 7, fecha: "2023-02-07" },
                { dia: 8, fecha: "2023-02-08" },
                { dia: 9, fecha: "2023-02-09" },
                { dia: 10, fecha: "2023-02-10" },
                { dia: 11, fecha: "2023-02-11" },
                { dia: 12, fecha: "2023-02-12" },
                { dia: 13, fecha: "2023-02-13" },
                { dia: 14, fecha: "2023-02-14" },
                { dia: 15, fecha: "2023-02-15" },
                { dia: 16, fecha: "2023-02-16" },
                { dia: 17, fecha: "2023-02-17" },
                { dia: 18, fecha: "2023-02-18" },
                { dia: 19, fecha: "2023-02-19" },
                { dia: 20, fecha: "2023-02-20" },
                { dia: 21, fecha: "2023-02-21" },
                { dia: 22, fecha: "2023-02-22" },
                { dia: 23, fecha: "2023-02-23" },
                { dia: 24, fecha: "2023-02-24" },
                { dia: 25, fecha: "2023-02-25" },
                { dia: 26, fecha: "2023-02-26" },
                { dia: 27, fecha: "2023-02-27" },
                { dia: 28, fecha: "2023-02-28" },
            ]
        }
    }, methods: {
        diaNuevoCitas(indice){
            console.log("a")
            this.$emit("dia-generar", this.calendario[indice].fecha)
        }

    }, computed: {
        aplicarEstilos() {
            let arrayResultado = [];
            this.calendario.forEach(element => {
                if (this.listaFechas.includes(element.fecha)) {
                    arrayResultado.push("EstilosEspeciales")
                } else {
                    arrayResultado.push("EstilosNormales")
                }
            });
            console.log(arrayResultado)
            return arrayResultado
        }
    }
}
</script>
<style lang="css">
.EstilosEspeciales{
    font-size: xx-large;
    color: red;

}
.estilosNormales{
    color: black;
}
.row-7 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.row-7 div:nth-child(8) {
    grid-column-start: 6;
}
</style>