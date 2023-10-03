//1. Pide la edad y si es mayor de 18 años indica que ya puede conducir.
function ejercicio1() {
  let edadPedir = prompt("Dime tu edad");
  if (edadPedir >= 18) {
    alert("Puedes conduncir");
  } else {
    alert("tas xikito");
  }
}
//2. Pide una nota (número). Muestra la calificación según la nota:
function ejercicio2() {
  let nota = prompt("Dime tu nota");
  let notaNumero = Number(nota);
  switch (notaNumero) {
    case 1:
    case 2:
    case 3:
      console.log("Muy Deficiente");
      break;
    case 4:
    case 5:
      console.log("Insuficiente");
      break;
    case 6:
    case 7:
      console.log("Bien");
      break;
    case 8:
    case 9:
      console.log("Notable");
      break;
    case 10:
      console.log("Sobresaliente");
      break;

    default:
      break;
  }
}
//3. Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
function ejercicio3() {
  var palabra = "";
  var arrayPalabra = [];
  var cadenaPalabras = "";
  var contador = 0;
  do {
    palabra = prompt("Dime una palabra");
    arrayPalabra[contador] = palabra;
    contador++;
  } while (typeof palabra == "string");

  for (let index = 1; index < arrayPalabra.length; index++) {
    cadenaPalabras = cadenaPalabras + arrayPalabra[index - 1] + " - ";
  }
  alert(cadenaPalabras);
}
//5. Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de indentidad)
function ejercicio5() {
  var numeroDni;
  var restoDivision;
  var arrayLetrasDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
  numeroDni = prompt("Dime tu DNI");
  if (numeroDni < 0 || numeroDni > 99999999) {
    return;
  }
  restoDivision = numeroDni%23;
  alert("Tu letras del dni es " +arrayLetrasDni[restoDivision])


}
