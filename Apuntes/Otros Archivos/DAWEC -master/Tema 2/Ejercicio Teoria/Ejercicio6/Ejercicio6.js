function fibonacciSinRecursividad() {
  let numeroDeIteraciones = prompt("Introduce el numero de iteraciones");
  let numeroIzquierda = 0;
  let numeroDerecha = 1;
  let numFibo = 0;
  for (let index = 0; index < numeroDeIteraciones; index++) {
    numFibo = numeroIzquierda + numeroDerecha;

    numeroIzquierda = numeroDerecha;
    numeroDerecha = numFibo;
    console.log(numFibo);
  }
}
function fibonacciConRecursividad(numeroIzquierda = 0, numeroDerecha = 1, numeroMax= 10) {
  if (numeroDerecha <= numeroMax) {
    let numFibo = numeroIzquierda + numeroDerecha;
    numeroIzquierda = numeroDerecha;
    numeroDerecha = numFibo;
    console.log(numFibo);
    fibonacciConRecursividad(numeroIzquierda, numeroDerecha, numeroMax);
  }
}
