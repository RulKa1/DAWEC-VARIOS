window.onload = () => {
    iniciarSelect();
    document.getElementById("enviarDatos").addEventListener("click", buscarConFiltro, false)
}
var listaAnimales = [];
var arrayTipos = [];

function iniciarSelect() {
    let request = new XMLHttpRequest();
    request.onload = devolverTodosAnimales;
    request.open("GET", "http://localhost:3000/animales", true);
    request.send();


}
function devolverTodosAnimales() {
    let arrayObjetoJson = JSON.parse(this.responseText)
    listaAnimales = arrayObjetoJson;
    añadirElementosArrayDeTipos()

}
function añadirElementosArrayDeTipos() {
    console.log(listaAnimales)
    listaAnimales.forEach(element => {
        if (!arrayTipos.includes(element.Tipo)) {
            arrayTipos.push(element.Tipo)
        }
    });
    añadirElementosAlSelect();

}
function añadirElementosAlSelect() {
    arrayTipos.forEach(element => {
        crearNuevoOption(element);
    });


}
function crearNuevoOption(categoria) {
    console.log("a")
    let select = document.getElementById("tiposAnimales");
    let option = document.createElement("option");
    option.value = categoria
    option.innerHTML = categoria
    select.append(option)
}
function buscarConFiltro(event) {
    resetearTabla();
    let select = document.getElementById("tiposAnimales")
    event.preventDefault()
    console.log("Pulsaste el boton")
    let request = new XMLHttpRequest();
    request.onload = recuperarAnimalesConFiltrosyMostrar;
    request.open("GET", `http://localhost:3000/animales?Tipo=${select.value}`, true);
    request.send();
}
function resetearTabla() {
    let tabla = document.getElementById("tabla");
    while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
    }
}

function recuperarAnimalesConFiltrosyMostrar() {
    let arrayAnimales = JSON.parse(this.responseText)
    let tabla = document.getElementById("tabla");
    crearHeader(tabla);
    arrayAnimales.forEach(element => {
        crearRowConDatos(tabla, element.Nombre, element.Rasgos);
    });


}
function crearHeader(tabla) {
    let rowHeader = document.createElement("tr");
    let header1 = document.createElement("th");
    header1.innerText = "Nombre";
    let header2 = document.createElement("th");
    header2.innerText = "Rasgos";
    rowHeader.append(header1);
    rowHeader.append(header2);
    tabla.append(rowHeader);
}
function crearRowConDatos(tabla, nombre, rasgos) {
    let row = document.createElement("tr")
    let nombreTabla = document.createElement("td")
    let rasgosTabla = document.createElement("td")
    nombreTabla.innerText = nombre;
    rasgosTabla.innerText = rasgos;
    row.append(nombreTabla)
    row.append(rasgosTabla)
    tabla.append(row)
}
