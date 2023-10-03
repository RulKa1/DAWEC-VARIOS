function ejercicio1() {
  //Recupera el elemento con id “apellido1”.
  let apellido1 = document.getElementById("apellido1");
  //Recupera todos los párrafos de una vez.
  let parrafos = document.getElementsByTagName("p");
  //Recupera, de una sola vez, todos los párrafos del div con id “seccionTercera”.
  let elementosDiv = document.querySelectorAll("#seccionTercera p");
  //Recupera todos los elementos de tipo input.
  let input = document.getElementsByTagName("input");
  //Recupera los elementos de tipo input con nombre “sexo”.
  let inputConNombre = document.getElementsByName("sexo");
  //Recupera los elementos de la lista de la clase “par”.
  let elementosListaConClase = document.querySelectorAll("li.par");
}
function ejercicio2() {
  // Recupera el primer párrafo que hay dentro del div “seccionPrimera”.
  let seccionPrimera = document.getElementById("seccionPrimera");
  let primerParrafo = seccionPrimera.firstChild;
  // Recupera el tercer párrafo del div anterior.
  let tercerParrafo = seccionPrimera.children[2];
  // El último elemento de la lista.
  let lista = document.getElementsByTagName("ul");
  let ultimoHijo = lista.lastElementChild;
  // La label del input nombre.
  let inputNombre = document.getElementById("nombre");
  let label = inputNombre.previousElementSibling;
}
function ejercicio3() {
  //Recupera el innerHTML del elemento ul y el textContent de dicha
  //etiqueta.
  let ul = document.getElementsByTagName("ul")[0];
  console.log(ul.innerHTML);
  console.log(ul.textContent);
  //Recupera el valor del primero input radio de sexo.
  let boton = document.getElementsByName("sexo")[0];
  //Busca como recuperar el valor del sexo que está seleccionado.
}
