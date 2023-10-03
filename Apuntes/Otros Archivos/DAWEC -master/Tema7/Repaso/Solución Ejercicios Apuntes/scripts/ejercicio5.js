window.addEventListener("load", () => {
    document.getElementById("form").addEventListener("submit", manejarEventoSubmit, false);
    document.getElementById("eliminarCliente").addEventListener("click", actuarSobreClientePorDNI.bind("eliminar"), false);
    document.getElementById("actualizarCliente").addEventListener("click", actuarSobreClientePorDNI.bind("modificar"), false);
    cargarClientes();
}, false);

/**
 * Mostrar por pantalla los datos de todos los clientes almacenados hasta el momento
 */
function cargarClientes(){

    let peticionClientes = new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open("GET", "http://localhost:3000/clientes", true);
        request.send();

        request.addEventListener("load", () => {
            if (request.status === 200) {
                resolve(JSON.parse(request.responseText));
            } else {
                reject("Se ha producido un error al recuperar los datos de los clientes");
            }
        });
        request.addEventListener('error', () => reject('Error en la petición HTTP'));
    });

    peticionClientes
    .then (datosClientes =>{
        let tabla = document.getElementById("tabla");
        datosClientes.forEach (cliente => {
            let nuevaFila = document.createElement("tr");
            nuevaFila.setAttribute("id", cliente.id);
            nuevaFila.innerHTML = `<td>${cliente.id} </td> 
                <td>${cliente.nombre}  ${cliente.apellidos}</td>
                <td>${cliente.fechaNac} </td>
                <td>${cliente.Sexo} </td>`;
        tabla.appendChild(nuevaFila);
        });
    })
}

/**
 * Cuando se envíe el formulario se desencadenará la acción para almacenar los datos del nuevo cliente.
 * Una vez almacenados de forma correcta, se procederá a completar la tabla mostrada al usuario con los 
 * datos devueltos por el servidor.
 * @param {*} event 
 */
function manejarEventoSubmit(event) {
    event.preventDefault();

    let datosCliente = getDatosCliente();

    nuevoCliente(datosCliente)
        .then((datosClienteNuevo) => {
            rellenarTabla(datosClienteNuevo);
        })
        .catch((error) => {
            alert(error);
        });
}

/**
 * Método que creará la petición y la ejecutará, devolviendo la promesa usada para
 * gestionar la petición.
 * @param {*} datosCliente 
 * @returns 
 */
function nuevoCliente(datosCliente) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open("POST", "http://localhost:3000/clientes", true);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(datosCliente));

        request.addEventListener("load", () => {
            if (request.status === 201) {
                resolve(JSON.parse(request.responseText));
            } else {
                reject("Se ha producido un error al almacenar los datos del nuevo cliente");
            }
        });
        request.addEventListener('error', () => reject('Error en la petición HTTP'));
    });
}

/**
 * Método para añadir a la tabla de clientes los datos del nuevo introducido por el usuario.
 * @param {*} datosClienteNuevo 
 */
function rellenarTabla(datosClienteNuevo) {
    let tabla = document.getElementById("tabla");
    let nuevaFila = document.createElement("tr");
    nuevaFila.setAttribute("id",datosClienteNuevo.id);
    nuevaFila.innerHTML = `<td>${datosClienteNuevo.id} </td> 
            <td>${datosClienteNuevo.nombre}  ${datosClienteNuevo.apellidos}</td>
            <td>${datosClienteNuevo.fechaNac} </td>
            <td>${datosClienteNuevo.Sexo} </td>`;
    tabla.appendChild(nuevaFila);

    document.getElementById("form").reset();
}

/**
 * Método que solicita al servidor los datos del cliente a eliminar, para poder recuperar su id
 * y pasárselo al método encargado del borrado.
 */
function actuarSobreClientePorDNI(){

    let dni = document.getElementById("dni").value;

    new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open("GET", "http://localhost:3000/clientes?DNI=" + dni, true);
        request.send();

        request.addEventListener("load", () => {
            if (request.status === 200) {
            resolve(JSON.parse(request.responseText));
            } else {
                reject("Se ha producido un error al solicitar datos al servidor");
            }
        });
    })
    .then ( datosCliente => {
        if (this == "modificar") {
            actualizaDatosCliente(datosCliente[0].id);
        } else if (this == "eliminar"){
            borrarClientePorId(datosCliente[0].id)
        }
    })
    .catch ( () => console.log("error"))
}

/**
 * Método que:
 *     - manda la petición de eliminar los datos del cliente indicado por el usuario.
 *     - actualiza la tabla eliminando el cliente indicado.
 * @param {*} id 
 */
function borrarClientePorId(id) {
    new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open("DELETE", "http://localhost:3000/clientes/" + id, true);
        request.send();

        request.addEventListener("load", () => {
            if (request.status === 200) {
                resolve(id);
            } else {
                reject("Se ha producido un error al eliminar los datos del cliente");
            }
        });
        request.addEventListener('error', () => reject('Error en la petición HTTP'));
    })
    .then ( idCliente => {
        let tabla = document.getElementById("tabla");
        let filaABorrar = document.getElementById(idCliente);
        tabla.removeChild(filaABorrar);
        document.getElementById("form").reset();
    })
    .catch (error => console.log(error))
}

/**
 * Método que actualiza un cliente a partir de los datos introducidos por el usuario
 * @param {*} id 
 */
function actualizaDatosCliente(id){
    let datosNuevos = getDatosCliente();

    new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open("PUT", "http://localhost:3000/clientes/" + id, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(datosNuevos));

        request.addEventListener("load", () => {
            console.log(request.status);
            if (request.status === 200) {
                let datosDevueltos = JSON.parse(request.responseText);
                resolve(datosDevueltos);
            } else {
                reject("Se ha producido un error al actualizar los datos del cliente");
            }
        });
        request.addEventListener('error', () => reject('Error en la petición HTTP'));
    })
    .then ( datosCliente => {
        let filaAActualizar = document.getElementById(datosCliente.id);
        (filaAActualizar.children[1]).innerText = datosCliente.nombre + " " +datosCliente.apellidos;
        (filaAActualizar.children[2]).innerText = datosCliente.fechaNac;
        (filaAActualizar.children[3]).innerText = datosCliente.Sexo;
        document.getElementById("form").reset();
    })
    .catch (error => console.log(error))

}

/**
 * 
 * @returns objeto con los datos del cliente introducidos por el usuario
 */
function getDatosCliente() {

    let prefs = "";
    let checks = Array.from(document.querySelectorAll("input[type=checkbox]:checked"));
    checks.forEach(check => {
        if (prefs == "") {
            prefs = prefs + check.value;
        } else {
            prefs = prefs + "_" + check.value;
        }
    });

    let datosCliente = {
        nombre: document.getElementById("nombre").value,
        apellidos: document.getElementById("apellidos").value,
        DNI: document.getElementById("dni").value,
        fechaNac: document.getElementById("fechaNac").value,
        Sexo: document.getElementById("form").sexo.value,
        preferencias: prefs
    };

    return datosCliente;
}