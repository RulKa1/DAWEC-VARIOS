window.addEventListener("load", listeners);
function listeners() {
  let form = document.getElementById("telefono");
  form.addEventListener("submit", comprobar);
}
function maximoLetras(numeroLetras) {
  let elemento = document.getElementById("observacion");
  return elemento.value.length < numeroLetras;
}
function comprobar(event) {
  let hijosForm = Array.from(this.elements);
  let numeroChecks = 2;
  valido = true;
  hijosForm.forEach((element) => {
    if (element.type == "radio" && element.checked) {
      console.log("a");
      numeroChecks--;
    }
    if (element.value == "" && element.type != "submit") {
      valido = false;
    }
  });
  if (numeroChecks == 2 || !valido) {
    event.preventDefault();
    console.log;
  }
}
