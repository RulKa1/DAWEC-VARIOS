<template>
  <FormularioPersona :lista-de-dias-disponibles="diaDisponibles" :lista-horarios-disponible="horarioDisponible"
    @cambio-de-dia="cambioHorario" @nueva-persona="añadirPersona"></FormularioPersona>
</template>

<script>
import FormularioPersona from './components/FormularioPersona.vue';
export default {
  name: 'App',
  components: {
    FormularioPersona
  }, data() {
    return {
      diaDisponibles: [
        {
          nombre: "lunes",
          horario: ["mañana", "tarde", "noche"]
        },
        {
          nombre: "martes",
          horario: ["mañana", "tarde", "noche"]
        },
        {
          nombre: "miercoles",
          horario: ["mañana", "tarde", "noche"]
        }
        ,
        {
          nombre: "jueves",
          horario: ["mañana", "tarde", "noche"]
        }
        ,
        {
          nombre: "viernes",
          horario: ["mañana", "tarde", "noche"]
        }
        ,
      ],
      horarioDisponible: [],
      grupoMedioFormar: [],
      gruposFormados: []
    }
  }, methods: {
    cambioHorario(dia) {
      console.log("a")
      let indice;
      this.diaDisponibles.forEach((element, index) => {
        if (element.nombre == dia) {
          indice = index
        }
      });
      this.horarioDisponible = this.diaDisponibles[indice].horario
    }, añadirPersona(nuevaPersona) {
      let indice = 404;
      this.grupoMedioFormar.forEach((element, index) => {
        if (element.dia == nuevaPersona.diaDeLaSemana && element.horario == nuevaPersona.franjaHoraria) {
          indice = index
        }

      });
      if (indice == 404) {
        let nuevoGrupo = {
          dia: nuevaPersona.diaDeLaSemana,
          horario: nuevaPersona.franjaHoraria,
          personas: [nuevaPersona.nombre],
        }
        this.grupoMedioFormar.push(nuevoGrupo)
        console.log(this.grupoMedioFormar)
        return
      }
      this.grupoMedioFormar[indice].personas.push(nuevaPersona.nombre)
      console.log(this.grupoMedioFormar)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
