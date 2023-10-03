window.onload = () => {
    document.getElementById("formulario").addEventListener("submit", validarDatos, false);
}

function validarDatos(event) {
    event.preventDefault();
    let mensaje = "";
    let inputsFormulario = document.getElementsByTagName("input");
    
    console.log(inputsFormulario);

    if(inputsFormulario[0].validity.valueMissing) {
        mensaje += "<p> El nombre es obligatorio</p>";
    }
    if(inputsFormulario[1].validity.valueMissing) {
        mensaje += "<p> El teléfono es obligatorio</p>";
    }
    if(inputsFormulario[1].validity.patternMismatch) {
        mensaje += "<p> El teléfono debe cumplir con el formato XXX XXX XXX</p>";
    }
    if(inputsFormulario[2].validity.patternMismatch) {
        mensaje += "<p> La dirección de correo debe cumplir con el formato xxx@xxx.xxx</p>";
    }
    if(!inputsFormulario[5].validity.valid) {
        mensaje += "<p> Es obligatorio seleccionar un tipo de vehículo </p>";
    }
    if(!inputsFormulario[9].validity.valid) {
        mensaje += "<p> Es obligatorio seleccionar una fecha</p>";
    }

    if (mensaje == "") {
        document.getElementById("formulario").submit();
    } else {
        document.getElementById("divErrores").innerHTML =mensaje;
    }
}