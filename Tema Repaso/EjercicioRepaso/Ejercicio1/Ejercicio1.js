function comprobarNumeroPositivoNegativo() {
  let numero = prompt("Introduce un numero");

  if (numero >= 0) {
    return alert("El numero " + numero + " Es positivo");
  }
  if (numero < 0) {
    return alert("El numero " + numero + " Es negativo");
  }
  return alert("No es un numero")

  
}
