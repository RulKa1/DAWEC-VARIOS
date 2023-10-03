<template>
  <div class="divCentrado">
    <ol>
      <li v-for="(pais, index) in paises" :key="index">
        {{ pais.nombre }}
        <ul>
          <li v-for="(autor, i) in pais.autores" :key="i">
            {{ autor }}
          </li>
        </ul>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
    data() {    
        return {
        paises: [
            {
            nombre: "España",
            autores: ["Ruiz Zafón", "Santiago Posteguillo", "Elvira Lindo"],
            },
            {
            nombre: "Reino Unido",
            autores: ["J.K.Rowling", "J.R.R.Tolkien", "Ian McEwan"],
            },
            {
            nombre: "Francia",
            autores: ["Victor Hugo", "Pierre Lemaitre", "Muriel Barbery"],
            },
            {
            nombre: "Italia",
            autores: ["Dante", "Umberto Eco", "Roberto Saviano"],
            },
        ],
        };
    }
}
</script>

<style scoped>
.divCentrado {
  margin: auto;
  width: 45%;
  text-align: left;
}
</style>
