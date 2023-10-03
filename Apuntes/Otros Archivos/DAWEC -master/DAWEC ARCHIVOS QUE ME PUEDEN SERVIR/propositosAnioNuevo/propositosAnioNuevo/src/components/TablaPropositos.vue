<template>
    <div id="tabla">
        <h2>Propósitos cumplidos</h2>
    <table v-if="propositos.length">
        <tr v-for="(prop,index) in propositos" :key="index">
            <td v-if="prop.hecho">{{index}}</td>
            <td v-if="prop.hecho">{{prop.texto}}</td>
        </tr>
    </table>
    </div>
</template>
<script>
export default {
    name: "TablaCumplidos",
    props: ["propositos"]
}
</script>
<style scoped>
  h2 {
    background-color: lightcoral;
    margin-bottom: 15px;
  }

    #tabla {
        float: right;
        width: 50%;
        box-sizing: border-box;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    table {
        border: 1px black solid;
        margin: 15px;
        padding: 4px;
    }
    tr, td {
        border: 1px red dotted;
        margin: 4px;
        padding: 4px;
    }
</style>