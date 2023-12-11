function dibujarTablero() {
  let padre = document.getElementById("padre");
  for (let index = 0; index < 9; index++) {
    let hijo = document.createElement("div");
    hijo.setAttribute("class", "hijo");
    hijo.setAttribute("onclick", "pintarPosicion(this)");
    padre.appendChild(hijo);
  }
}
function pintarPosicion(posicion) {
  let turno = document.getElementById("turno");
  console.log(posicion);
  posicion.setAttribute("onclick", "");
  posicion.innerText = turno.value;
  let turnoAntiguo = turno.value;
  console.log(turno.value);
  if (turno.value == "x") {
    turno.value = "y";
  } else {
    turno.value = "x";
  }
  if (comprobarGanador(turnoAntiguo)) {
    return alert("Ha ganado  " + getGanador(turnoAntiguo));
  }
}
function comprobarGanador(turnoAntiguo) {
  return (
    comprobarHorizontal(turnoAntiguo) ||
    comprobarVertical(turnoAntiguo) ||
    comprobarDiagonal(turnoAntiguo)
  );
}
function comprobarHorizontal(turnoAntiguo) {
  let posiciones = document.getElementsByClassName("hijo");
  if (
    posiciones[0].innerText == turnoAntiguo &&
    posiciones[1].innerText == turnoAntiguo &&
    posiciones[2].innerText == turnoAntiguo
  ) {
    return true;
  }
  if (
    posiciones[3].innerText == turnoAntiguo &&
    posiciones[4].innerText == turnoAntiguo &&
    posiciones[5].innerText == turnoAntiguo
  ) {
    return true;
  }
  if (
    posiciones[6].innerText == turnoAntiguo &&
    posiciones[7].innerText == turnoAntiguo &&
    posiciones[8].innerText == turnoAntiguo
  ) {
    return true;
  }
  return false;
}
function comprobarVertical(turnoAntiguo) {
  let posiciones = document.getElementsByClassName("hijo");
  if (
    posiciones[0].innerText == turnoAntiguo &&
    posiciones[3].innerText == turnoAntiguo &&
    posiciones[6].innerText == turnoAntiguo
  ) {
    return true;
  }
  if (
    posiciones[1].innerText == turnoAntiguo &&
    posiciones[4].innerText == turnoAntiguo &&
    posiciones[7].innerText == turnoAntiguo
  ) {
    return true;
  }
  if (
    posiciones[2].innerText == turnoAntiguo &&
    posiciones[5].innerText == turnoAntiguo &&
    posiciones[8].innerText == turnoAntiguo
  ) {
    return true;
  }
  return false;
}
function comprobarDiagonal(turnoAntiguo) {
  let posiciones = document.getElementsByClassName("hijo");
  if (
    posiciones[0].innerText == turnoAntiguo &&
    posiciones[4].innerText == turnoAntiguo &&
    posiciones[8].innerText == turnoAntiguo
  ) {
    return true;
  }
  if (
    posiciones[6].innerText == turnoAntiguo &&
    posiciones[4].innerText == turnoAntiguo &&
    posiciones[2].innerText == turnoAntiguo
  ) {
    return true;
  }

  return false;
}
function getGanador(turno) {
  console.log(turno)
  let input1 = document.getElementById("jugador1");
  let input2 = document.getElementById("jugador2");
  if (turno == "x") {
    return input1.value;
  } else {
    return input2.value;
  }
}
function reset() {
  let padre = document.getElementById("padre");
  padre.innerHTML = "";
  dibujarTablero();
}
