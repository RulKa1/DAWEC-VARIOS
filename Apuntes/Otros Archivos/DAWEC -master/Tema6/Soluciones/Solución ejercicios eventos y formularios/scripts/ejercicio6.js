window.addEventListener("load", cargaInicial, false);

function cargaInicial () {
    document.getElementById("color").value = "#ffff00";

    document.getElementById("formulario").addEventListener("submit", comprobarDatos, false);

    let labels = Array.from(document.getElementsByTagName("label"));
    labels.forEach(elemento => {
        elemento.addEventListener("mouseover", event =>elemento.nextElementSibling.classList.toggle("bordear"), false);
        elemento.addEventListener("mouseout", event =>elemento.nextElementSibling.classList.toggle("bordear"), false);
    });
}

function comprobarDatos(event) {
    event.preventDefault();
    let enviar = true;

    let color = document.getElementById("color").value;
    let elementos = Array.from(document.getElementsByTagName("input"));

    elementos.forEach(elemento => {
        if(!elemento.validity.valid) {
            enviar = false;
            elemento.previousElementSibling.style.color = color;
            elemento.previousElementSibling.style.borderColor = color;
            elemento.previousElementSibling.style.borderColor = "1px";
            elemento.previousElementSibling.style.borderStyle = "solid";
        } else {
            elemento.previousElementSibling.removeAttribute("style");
            elemento.previousElementSibling.className = "label";
        }
    });

    if (enviar) {
        document.forms[0].submit();
    }
}