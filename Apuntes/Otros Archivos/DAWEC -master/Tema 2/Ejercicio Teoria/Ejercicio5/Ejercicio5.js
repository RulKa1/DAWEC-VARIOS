function pedirColor() {
  let colorElegido;
  var arrayColores = [];
  do {
    colorElegido = prompt("Introduce un color");
    if (colorElegido == "rojo") {
      break;
    }
    if (colorElegido == "verde") {
      continue;
    }
    arrayColores.push(colorElegido);
  } while (1 === 1);
  contarElementosArray(arrayColores);
}
function contarElementosArray(arrayColores) {
  let unicos = [];
  arrayColores.forEach((elemento) => {
    if (!unicos.includes(elemento)) {
      unicos.push(elemento);
    }
  });
  console.log(unicos)

  for (let index = 0; index < arraySinRepetidos.length; index++) {
    let contador = contarElementosArray(unicos[index], arrayColores);
    alert(arr[index] + "Sale :" + contador + " Veces");
  }
}

function contarElementosArray(numeroBuscar, arrayColores) {
  let contador = 0;
  for (let index = 0; index < arrayColores.length; index++) {
    if (numeroBuscar == arrayColores[index]) {
      contador++;
    }
  }
}
