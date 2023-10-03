window.addEventListener("load", event => {
    document.getElementById("formulario").addEventListener("submit", comprobarDatos, false);

    document.getElementById("pais").addEventListener("change", actualizarCiudades, false);
}, false);

function comprobarDatos(event) {
    event.preventDefault();
    let divErrores = document.getElementById("errores");
    divErrores.innerHTML = "";
    let mensaje = "";

    mensaje += comprobarDNI();

    mensaje += comprobarEmail();

    mensaje += comprobarAnagrama();

    if (mensaje != "") {
        divErrores.innerHTML = mensaje;
    }    
}

function comprobarDNI() {
    let dniElemento = document.getElementById("dni");
    if (dniElemento.validity.valid) {
        let dni = dniElemento.value;
        let letraCalculada = calcularLetraDNI(Number(dni.slice(0, dni.length - 1)));
        let letra = (dni[dni.length-1]).toUpperCase();
        if (letra != letraCalculada) {
            alert("La letra del DNI no es correcta");
        }
        return "";
    }
   return "<p>El campo DNI es obligatorio y estará compuesto por 8 números y una letra <p>";
}

function calcularLetraDNI(numeroDni) {
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    return letras[numeroDni % 23];
}

function comprobarEmail() {
    let emailElemento = document.getElementById("correo");
    let dominios = ["gmail.com", "hotmail.com", "calasanzsalamanca.com"];
    if (emailElemento.validity.valid) {
        let coincide = false;
        let email = emailElemento.value;
        let dominioCorreo = email.split("@");
        dominios.forEach(dominio => {
            if (dominio === dominioCorreo[1]) {
                coincide = true;
            }
        });
        if (!coincide) {
            alert("El correo no es válido");
        }
        return "";
    } 
    
    return "<p>La dirección de correo es obligatoria y ha de tener un formato válido <p>";
}

function comprobarAnagrama() {
    let palabraElem = document.getElementById("palabra");
    let anagramaElem = document.getElementById("anagrama");
    if (palabraElem.validity.valid && anagramaElem.validity.valid) {
        let palabra = palabraElem.value;
        let anagrama = anagramaElem.value;
        let dato1 = palabra.toLowerCase().split("").sort().join("");
        let dato2 = anagrama.toLowerCase().split("").sort().join("");
        if (dato1 != dato2) {
            alert("La segunda palabra no es un anagrama de la primera");
        }
        return "";
    }
    
    return "Los campos pablabra 1 y anagrama son obligatorios"
}

function actualizarCiudades() {
    let pais = document.getElementById("pais").value;
    switch (pais) {
        case "1":
            generarCiudades(["Madrid", "Salamanca", "Zaragoza"]);
            break;
        case "2":
            generarCiudades(["París", "Burdeos", "Niza"]);
            break;
        case "3":
            generarCiudades(["Dublín", "Cork", "Killkenny"]);
            break;
        default:
            document.getElementById("ciudad").innerHTML = "<option value='0'>No inicializado</option>";
    }
}

function generarCiudades(ciudades){
    let selectCiudades = document.getElementById("ciudad");
    selectCiudades.innerHTML = "<option value='0'>No inicializado</option>";
    for (let i = 0; i< ciudades.length; i++) {
        let opcion = document.createElement("option");
        opcion.setAttribute("value", i+1);
        opcion.innerHTML = ciudades[i];
        if (i == 0) {
            opcion.setAttribute("selected", true);
        }
        selectCiudades.appendChild(opcion);
    }
}