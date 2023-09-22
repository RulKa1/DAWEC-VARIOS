function multiplicar() {
  let numero1 = document.getElementsByTagName("input")[0].value;
  let numero2 = document.getElementsByTagName("input")[1].value;
  let resultado = document.getElementById("resultado");
  if (numero1 >= 0 && numero2 >= 0) {
    resultado.value = numero1 * numero2;
  } else {
    alert("No es posible realzar la operacion");
  }
}
function dividir() {
  let numero1 = document.getElementsByTagName("input")[0].value;
  let numero2 = document.getElementsByTagName("input")[1].value;
  let resultado = document.getElementById("resultado");
  if (numero1 >= 0 && numero2 >= 0) {
    resultado.value = numero1 / numero2;
  } else {
    alert("No se puede hacer la operacion");
  }
}
