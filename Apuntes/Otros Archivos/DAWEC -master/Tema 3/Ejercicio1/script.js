function ejercicio1() {
  let numero;
  let cadena;
  let añadir;
  let arrayPersonas = [];
  do {
    numero = prompt("Introduce un numero");
    cadena = prompt("Introduce una cadena");
    añadir = confirm("Desea añadir " + cadena + " En la posicion" + numero);
    console.log(añadir);
    if (añadir) {
      añadirNombre(numero, arrayPersonas, cadena);
    } else {
      borrarNombre(numero, arrayPersonas);
    }
  } while (!isNaN(numero));
  console.log(arrayPersonas);
}
function añadirNombre(posicion, array, nombre) {
  if (posicion >= 0) {
    array[posicion] = nombre;
  } else {
    array.push(nombre);
  }
}
function borrarNombre(posicion, array) {
  if (posicion >= 0) {
    array[posicion] = undefined;
  } else {
    array.shift();
  }
}
