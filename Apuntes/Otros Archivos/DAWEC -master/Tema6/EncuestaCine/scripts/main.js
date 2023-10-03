window.onload = function () {
    document.getElementById('form').addEventListener("submit", validarFormulario, false);
    let arrayChecboxes = Array.from(document.getElementsByClassName("checks"))
    arrayChecboxes.forEach(element => {
        element.addEventListener("mouseover", pintarChecbox.bind(document.getElementById("labelOfertas")))
        element.addEventListener("mouseout", despintarChecbox.bind(document.getElementById("labelOfertas")))
    });
    document.body.addEventListener("keyup", avisarDeLaLetraX)
}
function validarFormulario(event) {
    event.preventDefault()
    let inputNombre = document.getElementById("nombre")
    let inputEmail = document.getElementById("email")
    let inputTelefono = document.getElementById("telefono")
    let divErrores = document.getElementById("divErrores")
    let inputSelecionar = document.getElementById("servicios")
    let enviar = true
    let formulario = document.getElementById("form")
    divErrores.innerText = ""
    enviar = comprobacionInputSelecionar(inputSelecionar, enviar);
    enviar = comprobacionInputNombre(inputNombre, divErrores, enviar);
    enviar = comprobacionesInputEmail(inputEmail, divErrores, enviar);
    enviar = comprobacionesInputTelefono(inputTelefono, divErrores, enviar);

    if (enviar == true) {
        limpiarFormulario(formulario)
    }
}
function comprobacionesInputTelefono(inputTelefono, divErrores, enviar) {
    if (inputTelefono.validity.patternMismatch) {
        inputTelefono.classList.add("campoInvalidoFormulario");
        divErrores.innerText += "El campo teléfono, de incluirse, debe tener 9 dígitos \n";
        enviar = false;
    } else {
        inputTelefono.classList.remove("campoInvalidoFormulario");
    }
    return enviar;
}

function comprobacionesInputEmail(inputEmail, divErrores, enviar) {
    if (inputEmail.validity.valueMissing) {
        inputEmail.classList.add("campoInvalidoFormulario");
        divErrores.innerText += "El campo Email es obligatorio \n";
        enviar = false;
    }
    if (inputEmail.validity.typeMismatch) {
        inputEmail.classList.add("campoInvalidoFormulario");
        divErrores.innerText += "El campo Email no tiene un formato correcto \n";
        enviar = false;
    }
    if (inputEmail.validity.valid) {
        inputEmail.classList.remove("campoInvalidoFormulario");
    }
    return enviar;
}

function comprobacionInputNombre(inputNombre, divErrores, enviar) {
    if (!inputNombre.validity.valid) {
        inputNombre.classList.add("campoInvalidoFormulario");
        divErrores.innerText += "El campo Nombre es obligatorio \n";
        enviar = false;
    } else {
        inputNombre.classList.remove("campoInvalidoFormulario");
    }
    return enviar;
}

function comprobacionInputSelecionar(inputSelecionar, enviar) {
    if (inputSelecionar.value == "Seleccione uno") {
        enviar = false;
    }
    return enviar;
}

function pintarChecbox() {
    this.classList.add("hoverCheckBox");
}
function despintarChecbox() {
    this.classList.remove("hoverCheckBox")

}
function avisarDeLaLetraX(event) {
    if (event.key === "x" || event.key === "X") {
        alert(`Pulsaste la letra ${event.key}`)
    }
}
function limpiarFormulario(formulario) {
    formulario.reset()
}
