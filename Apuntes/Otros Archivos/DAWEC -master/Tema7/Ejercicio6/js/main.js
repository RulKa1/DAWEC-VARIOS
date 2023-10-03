window.onload = () => {
    getTodosLosUsuarios()
}
function getTodosLosUsuarios() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            if (response.status==404) {
                alert(`Error:${response.statusText}`)
                return [];
            }
        }).then(json => tratarDatos(json))
        .catch(error => console.error(error))
}
function tratarDatos(datos) {
    datos.forEach(element => {
        crearRowTabla(element.id, element.name, element.username, element.email, getAddress(element.address))
    });
}
function getAddress(direccionArray) {
    return `${direccionArray.street} ${direccionArray.city}`
}
function crearRowTabla(id, name, username, email, address) {
    let row = document.createElement("tr")
    let tdId = document.createElement("td")
    let tdName = document.createElement("td")
    let tdUsername = document.createElement("td")
    let tdEmail = document.createElement("td")
    let tdAddress = document.createElement("td")
    let tabla = document.getElementById("tabla")


    tdId.innerText = id;
    tdName.innerText = name;
    tdUsername.innerText = username;
    tdEmail.innerText = email;
    tdAddress.innerText = address;
    row.append(tdId)
    row.append(tdName)
    row.append(tdUsername)
    row.append(tdEmail)
    row.append(tdAddress)
    tabla.append(row)

}