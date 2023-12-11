color = document.getElementById("color").value
function dibujar() {
    let padre = document.getElementById("padre")
    for (let index = 0; index < 10000; index++) {
        let hijo = document.createElement("div");
        hijo.setAttribute("class","hijo");
        hijo.setAttribute("onmouseover", "pintar(this)")
        padre.appendChild(hijo)
        
    }
}
function pintar(elemento) {
    elemento.style.backgroundColor = color
    
}
function seleccionarColor() {
    let pintura = document.getElementById("color");
    let colorConfirmar = document.getElementById("colorTruco")
    color = pintura.value;
    colorConfirmar.style.backgroundColor = pintura.value;
}