function comenzarAccion(tipoFuncion) {
  if (tipoFuncion == "patrones") {
    buscarPatrones();
    return;
  }
  if (tipoFuncion == "palabras") {
    ordenarPalabras();
    return;
  }
  contarPalabras();
  return;
}
function buscarPatrones() {
  let patrones = ["34", "101", "ES", "HO"];
  let numeroVeces = [0, 0, 0, 0];
  let textoAlert = "";
  let cajaDeTexto = document.getElementById("textArea").value;
  let arrayPalabras = cajaDeTexto.split(" ");
  arrayPalabras.forEach((element) => {
    patrones.forEach((elementPalabra, index) => {
      if (element.toUpperCase() == elementPalabra) {
        numeroVeces[index]++;
      }
    }
    );
  });
  if (numeroVeces.every((palabra) => palabra == 0)) {
    return alert("No se ha encontrado ninguno de los patrones a buscar");
  }
  numeroVeces.forEach((element, index) => {
    if (element > 0) {
      textoAlert +=
        "El patron " +
        patrones[index] +
        " lo contienen " +
        element +
        " palabras" +
        " \n";
    }
  });
  alert(textoAlert);
}

function ordenarPalabras() {
  let cajaDeTexto = document.getElementById("textArea").value;
  let arrayPalabras = cajaDeTexto.split(" ");

  arrayPalabras.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  arrayPalabras.reverse();
  alert(
    "El orden de las palabras en orden inverso es: " + arrayPalabras.join()
  );
}
function contarPalabras() {
  let cajaDeTexto = document.getElementById("textArea").value;
  let arrayPalabras = cajaDeTexto.split(" ");
  let arrayPalabrasFiltrado = arrayPalabras.filter(
    (palabra) => palabra.length >= 7
  );
  if (arrayPalabrasFiltrado.length == 1) {
    return console.log(
      "Hay " +
        arrayPalabrasFiltrado.length +
        " palabra con una longitud mayor o igual a 7 caracteres"
    );
  }
  return console.log(
    "Hay " +
      arrayPalabrasFiltrado.length +
      " palabras con una longitud mayor o igual a 7 caracteres"
  );
}
