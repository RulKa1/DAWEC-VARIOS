window.onload = () => {
    document.getElementById("verAnimales").addEventListener("click", verAnimales)
    document.getElementById("nuevoAnimal").addEventListener("click", insertarNuevoAnimal)
}
function verAnimales() {
    fetch("http://localhost:3000/animales")
        .then(response => response.json())
        .then(json => mostrarAnimales(json))

}
function mostrarAnimales(listaAnimales) {
    listaAnimales.forEach(element => {
        console.log(element)
    });
}
function insertarNuevoAnimal() {
    let url = "http://localhost:3000/animales";
    let objeto = {
        "Tipo": "Perro",
        "Nombre": "PEPE",
        "Observacion": "Esta Insertado al JSON",
        "Ubicacion": "Ubicacion Insertar",
        "Rasgos": "Insertado",
        "Imagen": "https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg"
    }
    let opciones = {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: { 'Content-Type': 'application/json' }
    }
    fetch(url, opciones)
        .then(response => response.json())
        .then(json => verAnimalesConFiltro(json.id))

}
function verAnimalesConFiltro(id) {
    fetch(`http://localhost:3000/animales/${id}`)
        .then(response => response.json())
        .then(json => mostrarAnimale(json))
}
function mostrarAnimale(json) {
    console.log(json)
}