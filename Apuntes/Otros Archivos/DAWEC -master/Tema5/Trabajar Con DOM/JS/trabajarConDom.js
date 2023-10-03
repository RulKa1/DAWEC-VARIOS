//Al pulsar el botón Aceptar, se dará el foco a la caja del nombre.
function darFoco() {
  let cajaNombre = document.getElementById("nombre");
  cajaNombre.focus();
}
//Al pulsar el botón Cancelar, el foco se quitará de la caja del nombre.
function quitarFoco() {
  let cajaNombre = document.getElementById("nombre");
  cajaNombre.blur();
}
// Crea un elemento de tipo h2 con el texto “Lorem Ipsum de nuevo”. Inclúyelo
//como primer elemento hijo del div seccionTercera cuando se pulse sobre el
//primer párrafo de dicha sección.
function crearElementoH2() {
  let h2Creado = document.createElement("h2");
  let padre = document.getElementById("seccionTercera");
  let primerHijo = padre.firstElementChild;
  h2Creado.innerHTML = "“Lorem Ipsum de nuevo”";
  padre.insertBefore(h2Creado, primerHijo);
}
// El tercer párrafo del div seccionPrimera pasará a ser el primero del div
//seccionTercera (sin eliminar ninguno de los que ya tiene esta última). Esta
//acción se desencadenará cuando se pulse en ese tercer párrafo.
function cambiarOrden() {
  let seccionPrimera = document.getElementById("seccionPrimera");
  let parrafo1 = seccionPrimera.children[0];
  let parrafo3 = seccionPrimera.children[2];
  parrafo1.before(parrafo3);
}
// Crea un div nuevo que se añadirá tras el div seccionSegunda(una vez queeste se haya cerrado).
//Clona (con todos sus descendientes) el elemento div
//que contiene la lista y añádelo como elemento hijo del nuevo div creado.
//Esta acción se desencadenará cuando se haga click sobre el encabezado
//“Frase inicial párrafos Lorem Ipsum”.
function crearDiv() {
  let divNuevo = document.createElement("div");
  let seccionSegunda = document.getElementById("seccionSegunda");
  let divLista = document.getElementById("seccionLista");
  divNuevo = divLista.cloneNode(true);
  seccionSegunda.after(divNuevo);
  divNuevo.id = "";
}

//➢ Cuando se pulse sobre el primer elemento h2:
//o En caso de que estén visibles los párrafos segundo y quinto de la página,
//desaparezcan.
//o En caso contrario, aparecerán en su posición original.
//o Se añada al valor del atributo size de los input de tipo texto 5.
function ejercicio6Parte1() {
  let parrafo2 = document.getElementsByTagName("p")[1];
  let parrafo5 = document.getElementsByTagName("p")[4];
  if (parrafo2.classList.contains("escondido")) {
    parrafo2.setAttribute("class", "");
  } else {
    parrafo2.setAttribute("class", "escondido");
  }
}

//➢ Cuando se pase el ratón por encima del texto “Escoge el sexo”:
//o Se quite el atributo name a los radio buttons. Comprueba cómo se
//comportan ahora.
function quitarName() {
  let inputs = Array.from(document.getElementsByTagName("input"));
  let radioButtons = inputs.filter((input) => input.type == "radio");
  radioButtons.forEach((element) => {
    element.removeAttribute("name");
  });
}
//➢ Incluye una nueva regla de estilo en el documento css para el selector
//.parrafosNormal. Dale el color de fondo y tipo de letra que quieras.

//➢ Incluye otra regla para el selector .parrafosEspecial. Asígnale un color de
//fondo diferente al anterior y la letra que sea en negrita.

//➢ Asigna a todos los párrafos del documento el estilo establecido para
//.parrafosNormal.
function aplicarEstilosAtodosLosParrafos() {
  let parrafos = Array.from(document.getElementsByTagName("p"));
  parrafos.forEach((element) => {
    element.className = "parrafosNormal";
  });
}
//➢ Utilizando DOM, cuando se haga doble clik sobre el primer párrafo de la página:
//o Asigna a todos los párrafos del documento, cuya posición entre los
//párrafos sea múltiplo de 3(posición física en la página), el estilo
//establecido para la clase parrafosEspecial(eliminando cualquier otro
//estilo anteriormente asignado).
function parrafosEspeciales() {
  console.log("algo")
  let parrafos = Array.from(document.getElementsByTagName("p"));
 let arrayFiltrado = parrafos.filter(((element, index) => (index+1) % 3==0));
 arrayFiltrado.forEach((element) => {
    element.className = "parrafosEspecial";
  });
}
//o Para los elementos de la lista, cambia el color de fondo a los que
//tengan asignada la clase par.
function cambiarColorFondoLista() {
  let elementoPar = Array.from(document.getElementsByClassName("par"))
  elementoPar.forEach(element => {
    element.style.backgroundColor = "blue"
  });
}