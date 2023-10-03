//El nombre y el teléfono son campos obligatorios. El teléfono tendrá el formato
//xxx xxx xxx, siendo x cualquier número entre el 0 y el 9 y estando cada tres
//caracteres separados por un espacio en blanco.
//o El correo electrónico no es obligatorio, pero de incluirse deberá tener un
//formato válido.
//o Sera obligatorio también seleccionar un tipo de vehículo mientras que los
//extras podrán no seleccionarse.
//o La fecha de reserva será obligatoria también y con el formato dd/mm/aaaa.
window.onload = () => {
    let form = document.getElementsByTagName("form")[0];
    let inputNombre = document.getElementsByName("nombreCliente")[0];
    let inputTelefono = document.getElementsByName("telefono")[0];
    let inputCorreoElectronico = document.getElementsByName("correoE")[0];
    let inputVehiculo1 = document.getElementsByName("taxi")[0];
    let inputVehiculo2 = document.getElementsByName("taxi")[1];
    let inputVehiculo3 = document.getElementsByName("taxi")[2];
    let inputsExtras = Array.from(document.getElementsByName("extras"));
    let inputFecha = document.getElementsByName("fecha")[0];
    let inputDestino = document.getElementById("destino");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!inputNombre.validity.valid) {
            return console.log("Nombre: " + inputNombre.validationMessage)
        }
        if (!inputTelefono.validity.valid) {
            return console.log("Telefono: " + inputTelefono.validationMessage)

        }
        if (!inputCorreoElectronico.validity.valid) {
            return console.log("Correo Electronico: " + inputCorreoElectronico.validationMessage)

        }
        if (!(inputVehiculo1.checked || inputVehiculo2.checked || inputVehiculo3.checked)) {
            return console.log("No  hay selecionado vehiculo")


        }
        if (!inputFecha.validity.valid) {
            return console.log("Fecha: " + inputFecha.validationMessage)


        }
        form.submit();
    });
}