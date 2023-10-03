//A partir de un array que contenga 15 notas entre 1 y 10, obtén la media de la clase.
function ejercicio() {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5.5, 7.5, 0, 6.5, 6.4];
  let sumaNotas = array.reduce((valorAnt, valorAct) => valorAnt + valorAct);
  console.log(array.length);
  console.log("La media de la clase es " + "" + sumaNotas / array.length);
}
//A partir de un array que contenga 15 notas entre 1 y 10, obtén la nota más alta.

function ejercicio() {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5.5, 7.5, 0, 6.5, 6.4];
  let notasOrdenadas = array.sort((elemen1, elemen2) => elemen1 - elemen2);
  console.log(notasOrdenadas[notasOrdenadas.length - 1]);
}
