var cuenta;
function inicioGeneral() {
  let cantidadDinero;
  do {
    cantidadDinero = prompt("Introduce una cantidad de dinero");
  } while (isNaN(cantidadDinero));
  let ingreso = confirm("¿Quiere realizar un ingreso?");
  if (ingreso) {
    cuenta.realizarIngreso(Number(cantidadDinero));
    alert("Has ingresado " + cantidadDinero + "€ en tu cuenta.");
  } else {
    cuenta.realizarTransferencia(Number(cantidadDinero));
  }
  alert("Tiene en la cuenta " + cuenta.reintegro + "€");
  console.log("Tiene " + cuenta.reintegro + " ");
}

function primerIngreso() {
  document.getElementById("boton").setAttribute("onClick", "inicioGeneral()");
  cuenta = new Cuenta(0);
  inicioGeneral();
}
