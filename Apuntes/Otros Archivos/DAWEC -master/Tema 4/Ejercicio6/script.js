//Crea una función que:
//o Pida al usuario que introduzca notas separadas por comas.
//o Calcule la nota media de dichas notas y la muestre por consola.
//o Seguidamente mostrará de nuevo por consola la media pero con 1 solo
//decimal.
function pedirNotasYMedia() {
  let textoNotas = prompt("Introduce las notas separadas por ,");
  let arrayNotas = textoNotas.split(",");
  let sumaNotas = 0;
  arrayNotas.forEach((element) => {
    sumaNotas += Number(element);
  });
  let media = sumaNotas / arrayNotas.length;
  console.log(media);
  console.log(media.toFixed(1));
}
//Crea una función que devuelva el cubo de un número comprobando primero si el
//parámetro pasado es un número entero:
//o Si no es un entero o no es un número mostrará un alert indicando cuál es el
//problema y devolverá false.
//o En caso contrario mostrará el resultado de la operación.
function calcularCubo() {
  let numero = prompt("Introduce un numero Entero");
  if (Number(numero).toFixed(0) == Number(numero)) {
    console.log(
      "El cubo es " + Number(numero) * Number(numero) * Number(numero)
    );
  } else {
    console.log("El numero" + numero + "Contiene decimales");
  }
}
//Implementa una función a la que se le pasa como parámetro un DNI y devolverá true
//en caso de que sea correcto y false en caso contrario. **La letra del DNI se calcula
//dividiendo la parte numérica del mismo entre 23 y cogiendo de la cadena
//‘TRWAGMYFPDXBNJZSQVHLCKE’ la letra correspondiente al resto de la división.
function comprobarDNI(DNI = "12345678A") {
  if (DNI.length < 9 || DNI.length > 9) {
    return console.log("El DNI no es valido");
  }
  let arrayLetrasDNI = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];

  let parteNumerosDNI = DNI.substring(0, 8);
  let parteLetraoDNI = DNI.charAt(8);
  let sumaNumeros = 0;
  for (let index = 0; index < parteNumerosDNI.length; index++) {
    sumaNumeros += parteLetraoDNI
    
  }
  console.log(sumaNumeros)
}
