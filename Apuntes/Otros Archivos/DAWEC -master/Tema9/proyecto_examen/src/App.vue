<template>
  <div id="contenido">
    <h1>Venta de ropa y complementos de Segunda Mano</h1>
    <div class="row">
      <FormularioPrendas @nueva-prenda-para-almacenar="crearNuevaPrenda" />
      <TablaEnVenta :listaProductosSinVender="listaProductosSinVender" @venta-producto="venderProducto" />
    </div>
    <MensajeVentas :listaProductosSinVender="listaProductosSinVender" />
    <UltimasVentas :listaProductosVendidos="listaProductosVendidos" />
  </div>
</template>

<script>
import FormularioPrendas from './components/FormularioPrendas.vue'
import MensajeVentas from './components/MensajeVentas.vue'
import TablaEnVenta from './components/TablaEnVenta.vue'
import UltimasVentas from './components/UltimasVentas.vue'


export default {
  name: 'App',
  components: {
    FormularioPrendas,
    TablaEnVenta,
    MensajeVentas,
    UltimasVentas
  }, data() {
    return {
      listaProductosSinVender: [],
      listaProductosVendidos: []
    }
  },
  methods: {
    crearNuevaPrenda(nuevaPrenda) {
      let nuevaPrendaArray = {
        nombre: nuevaPrenda.nombreNuevo,
        color: nuevaPrenda.colorNuevo,
        precio: nuevaPrenda.precioPrendaNuevo,
        talla: nuevaPrenda.tallaNueva,
        modificar: false,
        nuevoPrecio: nuevaPrenda.precioPrendaNuevo
      }

      this.listaProductosSinVender.push(nuevaPrendaArray)
    },
    venderProducto(indice) {
      if (this.listaProductosVendidos.length == 6) {
        this.listaProductosVendidos.splice(0, 1)
      }
      this.listaProductosVendidos.push(this.listaProductosSinVender[indice]);
      this.listaProductosSinVender.splice(indice, 1)
      console.log(this.listaProductosSinVender)
      console.log(this.listaProductosVendidos)
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

h1 {
  text-align: center;
  color: rgb(61, 131, 189);
  font-size: 3em;
}

#app>* {
  margin-top: 1em;
  margin-left: 1em;
}

#registrarNuevaPrenda>form {
  display: grid;
  grid-template-columns: 30% 40%;
  background-color: rgb(62, 82, 170);
}

#registrarNuevaPrenda>form>button {
  margin-left: 10em;
  width: 100%;
}

.row {
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
}

#app {
  width: 80%;
  background-color: white;
  margin: 0 auto;
}

body {
  background-color: rgb(20, 88, 97);
}

table,
th {
  border: 1px solid black;
  margin: 0 auto;
}

th {
  background-color: aqua;
}

#textoDeTodasLasVentas {
  border: 1px solid aqua;
  text-align: center;
  margin: 1em auto;
  width: 90%;
  min-height: 7em;

}

#registrarNuevaPrenda>form label {
  margin-left: 1em;
}

#registrarNuevaPrenda>form>* {
  margin-top: 1em;
}

tr {
  background-color: aliceblue;
}

.tdbodybien tr:nth-child(even) {
  background-color: #4C8BF5;

}

.tdbodybien tr:nth-child(even) td,
td {
  border: 1px solid;

}

table {
  width: 60%;
  margin: 1em auto;
}
input, select{
  width: 90%;
  margin: 0;
  padding: 0;
}
</style>