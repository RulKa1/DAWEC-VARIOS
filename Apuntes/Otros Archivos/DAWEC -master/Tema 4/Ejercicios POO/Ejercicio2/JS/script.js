var cuenta;
function inicioGeneral() {
  let cantidadDinero;
  do {
    cantidadDinero = prompt("Introduce una cantidad de dinero");
  } while (isNaN(cantidadDinero));
  let ingreso = confirm("¿Quiere realizar un ingreso?");
  if (ingreso) {
    cuenta.realizarIngreso(Number(cantidadDinero));
  } else {
    cuenta.realizarTransferencia(Number(cantidadDinero));
  }
  console.log("Tiene " + cuenta.reintegro + "€ ");
}
function primeraEjecucion() {
  document.getElementById("boton").setAttribute("onClick", "inicioGeneral()");
  cuenta = new Cuenta(0);
  inicioGeneral()
}
