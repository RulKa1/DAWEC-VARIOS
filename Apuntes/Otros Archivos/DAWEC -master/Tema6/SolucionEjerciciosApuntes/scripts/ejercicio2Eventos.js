//Registra un evento para la etiqueta <body> de tal manera que al mover el
//ratón en cualquier punto de la ventana del navegador, se muestre, en ese
//elemento añadido, la posición del puntero respecto de la pantalla y respecto
//de la página.
document.getElementsByTagName("body")[0].addEventListener("mouseover",getElemento,false)
function getElemento (evento) {
    console.log(evento.target)
}
//Registra otro evento para <body> para que al pulsar cualquier tecla se muestre
//en un alert el key y el keyCode de la tecla pulsada. 
document.getElementsByTagName("body")[0].addEventListener("keyup",getClick,false)
function getClick(evento) {
    console.log(evento.key)
}
