function ejercicio1() {
    let edad = prompt("Escribre tu edad");
    if (edad >= 18) {
      alert("Tienes permiso para conducir");
    } else {
      alert("No tienes permiso para conducir");
    }
}  

function ejercicio2(){
let nota = prompt("Introduzca una nota");
  let notas = Number(nota);
  switch (notas) {
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
  }}
function ejercicio3(){
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
function ejercicio5(){
var resto = 0;
var letra = "";
do {
    var numero = prompt("Introduce tu dni");
    if (Number(numero) == numero) {
        numero = Number(numero);
        if (numero >= 0 && numero <= 99999999) {
            resto = numero % 23;
            switch (resto) {
                case 0:
                    letra = "T";
                    break;
                case 1:
                    letra = "R";
                    break;
                case 2:
                    letra = "W";
                    break;
                case 3:
                    letra = "A";
                    break;
                case 4:
                    letra = "G";
                    break;
                case 5:
                    letra = "M";
                    break;
                case 6:
                    letra = "Y";
                    break;
                case 7:
                    letra = "F";
                    break;
                case 8:
                    letra = "P";
                    break;
                case 9:
                    letra = "D";
                    break;
                case 10:
                    letra = "X";
                    break;
                case 11:
                    letra = "B";
                    break;
                case 12:
                    letra = "N";
                    break;
                case 13:
                    letra = "J";
                    break;
                case 14:
                    letra = "Z";
                    break;
                case 15:
                    letra = "S";
                    break;
                case 16:
                    letra = "Q";
                    break;
                case 17:
                    letra = "V";
                    break;
                case 18:
                    letra = "H";
                    break;
                case 19:
                    letra = "L";
                    break;
                case 20:
                    letra = "C";
                    break;
                case 21:
                    letra = "K";
                    break;
                case 22:
                    letra = "E";
                    break;
                default:
                    alert("Numero erroneo");
            }
        }
        alert("Numero: " + numero + ", Letra: " + letra);
    }
    else {
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
}
while (numero != undefined);
}