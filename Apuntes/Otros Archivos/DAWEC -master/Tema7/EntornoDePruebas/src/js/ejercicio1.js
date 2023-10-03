window.onload = () => {
    document.getElementById("form2").addEventListener("submit", validarEnvio, false)
    document.getElementById("form2").addEventListener("submit", postCiudades, false)
    document.getElementById("form2").addEventListener("submit", postMonumentos, false)
    iniciarSelects();
    document.getElementById("pais").addEventListener("change", cambioDeCiudades, false)
    document.getElementById("verMonumentos").addEventListener("click", busquedaMonumentos, false)

}
var listaCiudades = []
var listaPaises = []
function validarEnvio(event) {
    event.preventDefault()
    let pais = document.getElementById("paisEnviar")
    let ciudad = document.getElementById("ciudadEnviar")
    let monumento = document.getElementById("monumentoEnviar")
    let enviar = pais.validity.valid && ciudad.validity.valid && monumento.validity.valid;
    if (enviar == true) {
        postDatos()
    }
}
function postDatos() {
    let request = new XMLHttpRequest();
    request.onload = comprobarPaisNuevo;
    request.open("GET", "http://localhost:3000/paises", true);
    request.send();

}
function comprobarPaisNuevo() {
    let paisesLista = JSON.parse(this.responseText)
    let paisNuevo = document.getElementById("paisEnviar").value;
    console.log(paisesLista)
    let enviar = true;
    paisesLista.forEach(element => {
        if (element.nombre === paisNuevo) {
            console.log(`elemento repetido ${paisNuevo}/${element.nombre}`)
            enviar = false;
        }
    });
    if (enviar == true) {
        submitPais(paisNuevo)
    }
}
function submitPais(pais) {
    let request = new XMLHttpRequest();
    request.onload = post;
    request.open("POST", "http://localhost:3000/paises", true);
    let objetoJSON = JSON.stringify({ nombre: pais })
    request.setRequestHeader("Content-type", "application/json");
    request.send(objetoJSON);

}
function post() {
    console.log(`Respuesta : ${this.responseText}`)
}
function iniciarSelects() {
    fetch('http://localhost:3000/paises')
        .then((response) => response.json())
        .then((json) => añadirDatos(json));

}
function añadirDatos(datos) {
    let paisesUnicos = [];
    datos.forEach(element => {
        if (!paisesUnicos.includes(element.nombre)) {
            console.log(`Pais Nuevo :${element.nombre}`)
            paisesUnicos.push(element.nombre)
            añadirOpcionSelect(element.nombre)
        }
    });
}
function añadirOpcionSelect(nombre) {
    let select = document.getElementById("pais")
    let option = document.createElement("option")
    option.value = nombre;
    option.innerText = nombre;
    select.append(option)

}
function cambioDeCiudades() {
    let paisBuscar = document.getElementById("pais").value
    fetch(`http://localhost:3000/ciudades?pais=${paisBuscar}`)
        .then((response) => response.json())
        .then((json) => añadirDatosSelectCiudad(json));
}
function añadirDatosSelectCiudad(datosCiudades) {
    let ciudadesSelect = document.getElementById("ciudadSelect");
    ciudadesSelect.innerHTML = `<option value="default">Selecione un Pais para continuar</option>`
    if (datosCiudades.length === 0) {
        return alert("No se han encontrado ciudades de ese pais pruebe mas tarde")
    }
    let ciudadesUnicas = [];
    datosCiudades.forEach(element => {
        if (!ciudadesUnicas.includes(element.nombre)) {
            console.log(`Pais Nuevo :${element.nombre}`)
            ciudadesUnicas.push(element.nombre)
            añadirOpcionSelectCiudades(element.nombre)
        }

    });

}
function añadirOpcionSelectCiudades(nombre) {
    let select = document.getElementById("ciudadSelect")
    let option = document.createElement("option")
    option.value = nombre;
    option.innerText = nombre;
    select.append(option)
}
function busquedaMonumentos() {
    let tabla = document.getElementById("resultados")
    tabla.innerHTML = "<tr><th>Ciudad</th> <th>Monumento</th></tr>"
    tabla.className = "oculto"
    let selectPais = document.getElementById("pais").value
    let selectCiudad = document.getElementById("ciudadSelect").value
    if (selectPais == "default") {
        return alert("Seleccione un pais Para continuar")
    }
    if (selectCiudad == "default") {
        return alert("Seleccione una ciudad Para continuar")
    }
    fetch(`http://localhost:3000/monumentos?ciudad=${selectCiudad}`)
        .then((response) => response.json())
        .then((json) => añadirDatosTablaCiudad(json));


}
function añadirDatosTablaCiudad(datosMonumentos) {
    if (datosMonumentos.length === 0) {
        return alert("No se han encontrado monumentos en esa ciudad pruebe mas tarde")
    }
    console.log(datosMonumentos)
    datosMonumentos.forEach(element => {
        añadirDatosMonumentos(element.nombre, element.ciudad)
    });


}
function añadirDatosMonumentos(nombreMonumento, ciudad) {
    let tabla = document.getElementById("resultados")
    let row = document.createElement("tr")
    let ciudadTd = document.createElement("td")
    let monumentoTd = document.createElement("td")
    ciudadTd.innerText = ciudad;
    monumentoTd.innerText = nombreMonumento;
    row.appendChild(ciudadTd);
    row.appendChild(monumentoTd)
    tabla.appendChild(row)
    tabla.className = ""

}
function postCiudades() {
    let url = "http://localhost:3000/ciudades";
    let ciudadInput = document.getElementById("ciudadEnviar").value
    let paisInput = document.getElementById("paisEnviar").value

    let nuevaCiudad = {
        nombre: ciudadInput,
        pais: paisInput
    };
    let init = {
        method: 'POST',
        body: JSON.stringify(nuevaCiudad),
        headers: { 'Content-Type': 'application/json' }
    };
    fetch(url, init)
        .then(response => response.json())
        .then(datosRespuesta => console.log(`ID:${datosRespuesta.id} Añadida ciudad: ${datosRespuesta.nombre} en: ${datosRespuesta.pais} `))
}
function postMonumentos() {
    let url = "http://localhost:3000/monumentos";
    let ciudadInput = document.getElementById("ciudadEnviar").value
    let monumentoInput = document.getElementById("monumentoEnviar").value

    let nuevoMonumento = {
        nombre: monumentoInput,
        ciudad: ciudadInput
    };
    let init = {
        method: 'POST',
        body: JSON.stringify(nuevoMonumento),
        headers: { 'Content-Type': 'application/json' }
    };
    fetch(url, init)
        .then(response => response.json())
        .then(datosRespuesta => console.log(`ID:${datosRespuesta.id} Añadido: ${datosRespuesta.nombre} en: ${datosRespuesta.pais} `))
}

