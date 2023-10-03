window.onload = function () {
    document.getElementById("formulario").addEventListener("click", validaciones, false)
    document.getElementById("formulario").addEventListener("submit", validacionesSubmit, false)

}
function validaciones() {
    let apartamento = document.getElementById("hogar");
    let montaña = document.getElementById("Montaña");
    let meseta = document.getElementById("Meseta");
    let aislado = document.getElementById("Aislado")
    if (montaña.checked && meseta.checked && apartamento.value == "Hotel") {
        selectApartamentoMontañaMeseta()
    } else {
        resetPrimerP();
    }
    if (apartamento.value == "Hotel") {
        añadirContenidoAlParrafoDeHotel()

    }


}
function selectApartamentoMontañaMeseta() {
    let apartamento = document.getElementById("hogar");
    let montaña = document.getElementById("Montaña");
    let meseta = document.getElementById("Meseta");
    let p = document.getElementById("validoMontaña");
    p.innerText = "Valores no compatibles para la búsqueda";
    apartamento.className = "estiloPunto1"
    montaña.className = "estiloPunto1"
    meseta.className = "estiloPunto1"

}
function resetPrimerP() {
    let apartamento = document.getElementById("hogar");
    let montaña = document.getElementById("Montaña");
    let meseta = document.getElementById("Meseta");
    let p = document.getElementById("validoMontaña");
    p.innerText = "";
    apartamento.className = ""
    montaña.className = ""

    meseta.className = ""

}
function añadirContenidoAlParrafoDeHotel() {
    let parrafo = document.getElementById("hotelTexto")
    parrafo.innerHTML = "Tenemos hoteles con spa"
    parrafo.addEventListener("click", desaparecer.bind(parrafo))

}
function desaparecer() {
    this.innerText = ""
}
function validacionesSubmit(event) {
    event.preventDefault()
    let error = "";
    let enviar = true;
    let apartamento = document.getElementById("hogar");
    let montaña = document.getElementById("Montaña");
    let meseta = document.getElementById("Meseta");
    let nucleoPoblacional = document.getElementById("nucleoPoblacional")
    if (montaña.checked && meseta.checked) {
        error +="No podrán estar seleccionados a la vez Montaña y Meseta"
        console.log("No podrán estar seleccionados a la vez Montaña y Meseta")
        montaña.className = "Error1"
        meseta.className = "Error1"
        enviar = false;

    }
    if (apartamento.value == "Apartamento" && aislado.checked) {
        error += "No podrá seleccionarse a la vez Apartamento y Aislado"
        console.log("No podrá seleccionarse a la vez Apartamento y Aislado")
        apartamento.className = "Error2"
        aislado.className = "Error2"
        enviar = false;

    }
    if (apartamento.value == "CasaRural" && nucleoPoblacional.checked == false) {
        error += "Si se selecciona Casa Rural u Hotel Rural, tendrá que seleccionarse,obligatoriamente, en núcleo poblaciona"
        console.log("Si se selecciona Casa Rural u Hotel Rural, tendrá que seleccionarse,obligatoriamente, en núcleo poblaciona")
        apartamento.className = "Error3"
        nucleoPoblacional.className = "Error3"
        enviar = false;

    }
    if (apartamento.value == "HotelRural" && !nucleoPoblacional.checked == false) {
        error += "Si se selecciona Casa Rural u Hotel Rural, tendrá que seleccionarse,obligatoriamente, en núcleo poblaciona"
        console.log("Si se selecciona Casa Rural u Hotel Rural, tendrá que seleccionarse,obligatoriamente, en núcleo poblaciona")
        apartamento.className = "Error3"
        nucleoPoblacional.className = "Error3"
        enviar = false;
    }
    if (enviar==true) {
        return document.forms[0].submit()
    }
    alert(error)

}