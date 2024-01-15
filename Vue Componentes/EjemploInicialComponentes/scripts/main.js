const app = Vue.createApp({
    data() {
        return {
            mensaje: "Librería Mi Mundo de Papel",
            telefono: 923451111,
            libros: [
                { titulo: 'La isla de las tentaciones' },
                { titulo: 'La isla de las tormentas' },
                { titulo: 'Dime quien soy'}
            ]
        };
    },
    methods: {
        mostrarAlerta() {
            alert("Número de libros almacenados:" + this.libros.length);
        }   
    }
});

app.component("pie-pagina", {
    //props incluirá todas las variables que recogen los valores pasados como parámetro al componente
    //Estos nombres incluidos en props son los que se utilizarán como atributos del elemento
    props:['telUser', 'dir'],
      template: /*html*/` 
          <footer id="piepagina">
          <h3>Sitio Web de Sonia Gutiérrez</h3>
          <h4>{{mensaje}} - {{telUser}} </h4>
          <h5>{{dir}}</h5>
          </footer>
        `,
        data(){
          return{
            mensaje: "Librería especializada"
          };
        }
  });