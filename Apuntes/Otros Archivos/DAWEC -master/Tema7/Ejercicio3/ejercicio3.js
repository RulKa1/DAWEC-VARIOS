window.onload = () => {
    document.getElementById("parte1").addEventListener("click", recuperarTodos, false);
    document.getElementById("parte2").addEventListener("click", recuperarTarea55, false);
    document.getElementById("parte3").addEventListener("click", recuperarTarea201, false);
    document.getElementById("parte4").addEventListener("click", insertarTarea, false);
    document.getElementById("parte5").addEventListener("click", borrarTarea, false);

};
//Realiza una petición para la que se devuelvan todas las tareas. 
function recuperarTodos() {
    let request = new XMLHttpRequest();
    request.onload = devolverTodos;
    request.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
    request.send();

}
function devolverTodos() {
    let arrayObjetoJson = JSON.parse(this.responseText)
    console.log(arrayObjetoJson)
    arrayObjetoJson.forEach(element => {
        console.log(element)
    });
}
function devolver1(params) {
    let objetoJSON = JSON.parse(this.responseText)
    console.log(this.responseText)
}
//Obtén la tarea con id 55
function recuperarTarea55() {
    let request = new XMLHttpRequest();
    request.onload = devolver1;
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/55", true);
    request.send();

}
//Obtén la tarea con id 201 (no existe). 
function recuperarTarea201() {
    let request = new XMLHttpRequest();
    request.onload = devolver1;
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/201", true);
    request.send();
}
//Crea una nueva tarea. En el cuerpo de la petición se pasarán los datos a
//almacenar: userID=5, title=”Prueba de POST”, completed=false.
function insertarTarea() {
    let request = new XMLHttpRequest();
    request.onload = devolver1;
    request.open("POST", "https://jsonplaceholder.typicode.com/todos", true);
    let objetoJSON = JSON.stringify({ userID: 5, title: "Prueba de Post", completed: false })
    request.setRequestHeader("Content-type", "application/json");
    request.send(objetoJSON);
}
// Elimina la tarea con id 32. Comprueba qué devuelve en este caso la API.
function borrarTarea() {
    let request = new XMLHttpRequest();
    request.onload = devolver1;
    request.open("DELETE", "https://jsonplaceholder.typicode.com/todos/32", true);
    request.send();
}