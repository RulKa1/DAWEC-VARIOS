var idBorrarUpdate;
window.addEventListener('load', function () {
    document.getElementById('formulario').addEventListener('submit', (event) => {
        console.log(event)
        event.preventDefault();
        enviarDatos()
            .then((posts) => {
                console.log(posts)

            })
            .catch(function (error) {
                console.error(error);

            });

    });
    document.getElementById("borrarAlgo").addEventListener("click", borrar)
    document.getElementById("actualizarAlgo").addEventListener("click", actualizar)

});
function enviarDatos() {
    return new Promise((resolve, reject) => {
        let nombreInput = document.getElementById("nombre")
        let apellidosInput = document.getElementById("apellido")
        let DNIInput = document.getElementById("dni")
        let fechaNac = document.getElementById("fecha")
        let sexo = document.querySelector('input[name = "sexo"]:checked')
        let sexoInput = "";
        let preferenciasValor = getPreferencias();
        if (sexo != null) {
            sexoInput = sexo.value

        }


        let peticion = new XMLHttpRequest();
        peticion.open('POST', `http://localhost:3000/clientes`);
        let objetoJSON = JSON.stringify({ nombre: nombreInput.value, apellidos: apellidosInput.value, DNI: DNIInput.value, fechaNac: fechaNac.value, Sexo: sexoInput, preferencias: preferenciasValor })
        peticion.setRequestHeader("Content-type", "application/json");
        peticion.send(objetoJSON);
        peticion.addEventListener('load', () => {
            if (peticion.status === 201) {
                resolve(JSON.parse(peticion.responseText));
            } else {
                reject("Error " + peticion.status + " (" + peticion.statusText + ") en la petición");
            }
        });
    });

}
function getPreferencias() {
    let arrayPreferencias = Array.from(document.querySelectorAll("input[type='checkbox']:checked"));
    let textoAcumulado = "";
    arrayPreferencias.forEach(element => {
        textoAcumulado += element.value;
    });
    console.log(textoAcumulado)
    return textoAcumulado;

}
function borrar() {


}
function borrar() {
    let idDelDNI;
    idDelDNI = getIDBorrar(document.getElementById("dni"))
    return
    fetch(`http://localhost:3000/clientes${idDelDNI}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

}
function getIDBorrar(dni) {
    let dniReturn = null;
    fetch(`http://localhost:3000/clientes?DNI=${dni.value}`)
        .then((response) => response.json())
        .then((json) =>
        setIDBorrar(json)
            //dniReturn = json[0]
        );
    return dniReturn;
}
function setIDBorrar(json) {
    idBorrarUpdate = json[0].id;
    console.log(json)
    console.log(idBorrarUpdate)
    fetch(`http://localhost:3000/clientes/${idBorrarUpdate}`, {
        method: 'Delete',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));


}