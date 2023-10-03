window.onload = () => {
    let form = document.getElementById("form1");
    let nombre = document.getElementById("nombre");
    let nombreError = document.getElementById("errorNombre");
    let email = document.getElementById("mail");
    let emailError = document.getElementById("errorEmail");

    form.addEventListener("submit", (event) => {
        nombreError.textContent = nombre.validationMessage;
        if (!nombre.validity.valid) {
            event.preventDefault();
        }
        emailError.textContent = email.validationMessage;
        if (!email.validity.valid) {
            event.preventDefault();
        }
    });
};