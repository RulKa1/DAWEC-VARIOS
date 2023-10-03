var historiaCreada = false;
function cambiarElementoInput(val) {
  val.style.background = "blue";
}
function cambiarElementoInputBlur(val) {
  val.style.background = "";
}
function crearHistoria() {
  let resultado = document.getElementById("divHistoria");
  let personaje = document.getElementById("personaje").value;
  let adjetivo = document.getElementById("adjetivo").value;
  let ciudad = document.getElementById("ciudad").value;
  let transporte = document.getElementById("transporte").value;
  let aficion = document.getElementById("aficion").value;
  resultado.innerHTML = personaje + adjetivo + ciudad + transporte + aficion;
  historiaCreada = true;
}
function cambiarH1() {
  let divCambiar = document.getElementById("divHistoria");
  if (!historiaCreada) {
    console.log("a")
    return;
  }
  if (divCambiar.style.backgroundColor == "yellow") {
    divCambiar.style.backgroundColor = "purple";
  } else {
    divCambiar.style.backgroundColor = "yellow";
  }
}
