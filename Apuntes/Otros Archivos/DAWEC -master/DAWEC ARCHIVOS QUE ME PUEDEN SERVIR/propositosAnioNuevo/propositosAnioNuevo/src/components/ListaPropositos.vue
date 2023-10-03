<template>
<div id="lista" >
    <h2> Lista de propósitos</h2>
    <ul v-if="propositos.length">
        <li v-for="(prop,index) in propositos" :key="index">
            <label>
            <input type="checkbox" v-model="prop.hecho">
            <del v-if="prop.hecho" @dblclick="borrarProposito(index)" class="estilo1">
                {{ prop.texto }}
            </del>
            <span v-else @dblclick="borrarProposito(index)" class="estilo2">
                {{ prop.texto }}
            </span>
        </label>
        </li>
    </ul>
    <p v-else>
        La lista de propósitos está vacía
    </p>
    </div>
</template>
<script>
export default {
    name: "ListaPropositos",
    props: ["propositos"],
    emits: ["borrarProp"],
    data() {
        return {
            nuevoProp: ""
        };
    },
    methods:{
        borrarProposito(index) {
            this.$emit('borrarProp', index);
        }
    }
}
</script>
<style scoped>
  h2 {
    background-color: plum;
    margin-bottom: 15px;
  }

#lista {
  float: left;
  width: 50%;
  box-sizing: border-box;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

  li {
    margin: 8px 0;
  }

  .estilo1 {
    color: green;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: right;
   } 

.estilo2 {
  color: red;
  font-family: fantasy;
  list-style-type: square;
}

</style>