class Deporte {
  nombre;
  diasLibres;
  diasReservados;
  constructor(nombre, diasLibres) {
    this.nombre = nombre;
    this.diasLibres = diasLibres;
  }
  toString() {
    return `Deporte: ${this.nombre} \nDias Reservados: ${this.diasReservados}`;
  }
  setDiasReservados() {
    let clickadas = document.getElementsByClassName("casillaSeleccionada");
    this.diasReservados = clickadas.length;
  }
  getLibres() {
    let clickadas = document.getElementsByClassName("casillaSeleccionada");
    return this.diasLibres - clickadas.length;
  }
}

var deportes = [];
var clonCalendario;
var indice;
function nuevoCalendario() {
  let inputText = document.getElementById("deporte");
  let diaHoy = new Date();
  if (inputText.value == "") {
    return alert("Introduce un deporte");
  }
  clonarCalendario();
  generarMes(diaHoy);
}
function generarMes(hoy) {
  let primerDiaMes = new Date(`${hoy.getMonth() + 1}-01-${hoy.getFullYear()}`);
  let numeroDiasMes = diasDelMes(hoy.getMonth() + 1, hoy.getFullYear());
  let casillasCalendario = document.getElementsByTagName("td");
  let numeroPrimerDia = primerDiaMes.getDay();
  let contador = 1;
  indice = 0;
  let inputText = document.getElementById("deporte");

  for (
    let index = numeroPrimerDia;
    index < numeroDiasMes + numeroPrimerDia;
    index++
  ) {
    casillasCalendario[index - 1].innerText = contador;
    contador++;
  }
  d = new Deporte(inputText.value, getDiasLibres());
  deportes.push(d);
  var idInterval = setInterval(() => {
    indice++;
    diasLibres();
    if (deportes[deportes.length - 1].getLibres() == 0) {
      deportes[deportes.length - 1].setDiasReservados();
      datosDeportes();
      clearInterval(idInterval);
      sustituirCalendario();
      reset();
    }

    if (indice == 15) {
      deportes[deportes.length - 1].setDiasReservados();
      datosDeportes();
      clearInterval(idInterval);
      alert("No se pueden reservar mas pistas");
      sustituirCalendario();
      reset();
    }
  }, 3000);
}
function cambiarColor(elemento) {
  if (elemento.innerText == "") {
    return;
  }
  elemento.setAttribute("class", "casillaSeleccionada");
  if (deportes[deportes.length - 1].getLibres() == 0) {
    alert("No hay ninguna pista que se puedan reservar más");
  }
}
function diasLibres() {
  let divAvisos = document.getElementById("divAvisos");
  let p = document.createElement("p");
  p.innerText = `Quedan ${deportes[
    deportes.length - 1
  ].getLibres()} dias libres`;
  divAvisos.append(p);
}
function diasDelMes(mes, año) {
  return new Date(año, mes, 0).getDate();
}
function clonarCalendario() {
  let calendarioOrg = document.getElementById("divMes");
  clonCalendario = calendarioOrg.cloneNode(true);
}
function sustituirCalendario() {
  let calendarioOrg = document.getElementById("divMes");
  calendarioOrg.replaceWith(clonCalendario);
}
function reset() {
  let input = document.getElementById("deporte");
  let divAvisos = document.getElementById("divAvisos");
  input.value = "";
  divAvisos.innerHTML = "";
}
function getDiasLibres() {
  let diasLibres = Array.from(
    document.querySelectorAll("td:not(.fondoViolet)")
  ).filter((a) => a.textContent != "");
  return diasLibres.length;
}
function datosDeportes() {
  console.log("Cotenido Array Deportes");
  deportes.forEach((element) => {
    console.log(element.toString());
  });
}
