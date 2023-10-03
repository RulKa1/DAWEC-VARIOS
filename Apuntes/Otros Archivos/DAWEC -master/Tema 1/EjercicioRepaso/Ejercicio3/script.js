function ejercicio3() {
  let numeroPuedeQuePrimo = prompt("DIME UN NUMERO");
  if (esprimo(numeroPuedeQuePrimo)) {
    alert("Es primo")
  }else{
    alert("No es primo")
  }
}
function esprimo(numero) {
  for (let index = 0; index < numero; index++) {
    if (numero == index || index == 1) {
      continue;
    }
    if (numero % index == 0) {
      return false;
    }
  }
  return true;
}
