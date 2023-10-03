window.onload = function() {
    document.getElementById("primerParrafo").addEventListener("dblclick", cambiarEstilos, false);
    document.getElementById("primerH2").addEventListener("click", invisibilizarParrafos, false);
    document.getElementById("parrafoSecPrim3").addEventListener("click", cambiarPosicionParrafo, false);
    document.getElementById("segundoH2").addEventListener("click", clonarDivLista, false);
    document.getElementById("tercerH2").addEventListener("mouseover", asignarAtributoNombre, false);
    document.getElementById("labelSexo").addEventListener("mouseover", eliminarAtributoName, false);
    document.getElementById("boton1").addEventListener("click", aceptar, false);
    document.getElementById("boton2").addEventListener("click", cancelar, false);
    document.getElementById("parrafo1SecTercera").addEventListener("click", insertarEncabezadoH2, false);

    //Eventos para el body
    document.getElementsByTagName("body")[0].addEventListener("mousemove", mostrarCoordenadas, false);
    document.getElementsByTagName("body")[0].addEventListener("keydown", mostrarTecla, false);
};

/**
 * Registra un evento para la etiqueta <body> de tal manera que al mover el ratón en cualquier 
 * punto de la ventana del navegador, se muestre, en ese elemento añadido, la posición del 
 * puntero respecto del navegador y respecto de la página.
 */
function mostrarCoordenadas(event) {
    let spanCoordenadas = document.getElementById("spanCoordenadas");
    let posicionNavegador = "Posición en la pantalla: " + event.screenX + "/" + event.screenY + "<br>";
    let posicionPagina = "Posición en la página: " + event.pageX + "/" + event.pageY + "<br>";
    spanCoordenadas.innerHTML = posicionNavegador + posicionPagina;
}

/**
 * Registra otro evento para <body> para que al pulsar cualquier tecla se muestre en un 
 * alert el key y el keyCode de la tecla pulsada.
 */
function mostrarTecla(event) {
    alert(event.key + "/" + event.keyCode);
}

/**
 * Elimina la última fila de la lista nueva
 */
function eliminarFila() {
    let coleccionListas = document.getElementsByTagName("ul");
    let ultimaLista = coleccionListas[coleccionListas.length - 1];
    let ultimaFila = ultimaLista.lastElementChild;
    ultimaLista.removeChild(ultimaFila);
}

/**
 * Crea un elemento de tipo h2 con el texto “Lorem Ipsum de nuevo”. 
 * Inclúyelo como primer elemento hijo del div seccionTercera cuando se pulse sobre el primer párrafo 
 * de dicha sección.
 */
function insertarEncabezadoH2() {
    let nuevoH2 = document.createElement("h2");
    nuevoH2.textContent = "Lorem Ipsum de nuevo";
    let seccionTercera = document.getElementById("seccionTercera");
    let nodoSiguiente = seccionTercera.childNodes[0];
    seccionTercera.insertBefore(nuevoH2, nodoSiguiente);
    document.getElementById("parrafo1SecTercera").removeEventListener("click", insertarEncabezadoH2);
}

/**
 * Utilizando DOM, cuando se haga doble clik sobre el primer párrafo de la página: 
 *      Asigna a todos los párrafos del documento, cuya posición entre los párrafos sea múltiplo de 3(posición física en la página), el estilo establecido para la clase parrafosEspecial(eliminando cualquier otro estilo anteriormente asignado).
 *      Para los elementos de la lista, cambia el color de fondo a los que tengan asignada la clase par.
 */

function cambiarEstilos() {
    let parrafos = document.getElementsByTagName("p");
    let elementosLi = document.getElementsByClassName("par");

    for (let i = 0; i < parrafos.length; i++) {
        if ((i + 1) % 3 === 0) {
            parrafos[i].classList = "parrafosEspecial";
        }
    }

    for (let j = 0; j < elementosLi.length; j++) {
        elementosLi[j].style.backgroundColor = "red";
    }

    let encabezado1 = document.getElementById("encabezado1");
    if (encabezado1.style.color == "red") {
        encabezado1.style.color = "black";
    } else {
        encabezado1.style.color = "red";
    }

}

/**
 * Cuando se pulse sobre el primer elemento h2:
 *      En caso de que estén visibles los párrafos segundo y quinto de la página, desaparezcan.
 *      En caso contrario, aparecerán en su posición original. 
 *      Se añada al valor del atributo size de los input de tipo texto 5.
 */
function invisibilizarParrafos() {
    //Visibilizar u ocultar párrafos
    let parrafosPagina = document.getElementsByTagName("p");
    let parrafo2 = parrafosPagina[1];
    let parrafo5 = parrafosPagina[4];
    console.log(parrafo2.hidden);
    if (parrafo2.hidden == false) { // Si no tiene atributo hidden se asigna a true
        parrafo2.hidden = true;
        parrafo5.hidden = true;
    } else { //En caso contrario, eliminamos el atributo
        parrafo2.removeAttribute("hidden");
        parrafo5.removeAttribute("hidden");
    }

    //Cambiar size de los inputs
    let inputs = document.getElementsByTagName("input");
    inputs = Array.from(inputs);
    let inputsTexto = inputs.filter(input => {
        if (input.type === "text")
            return true;
    });
    inputsTexto.forEach(input => {
        input.size = input.size + 5;
    });
}

/**
 * Cuando se pase el ratón por encima del texto “Escoge el sexo”: 
 *      Se quite el atributo name a los radio buttons. Comprueba como se comportan ahora.
 */
function eliminarAtributoName() {
    let inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "radio")
            inputs[i].removeAttribute("name");
    }
}

/**
 * Cuando pase el ratón por encima del título del formulario: 
 *      Se añada un nuevo atributo name a los radio button con un valor diferente al que tuvieran de inicio.
 */
function asignarAtributoNombre() {
    let inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].name = "nuevoNombre";
        console.log(inputs[i].value + " " + inputs[i].name);
    }
}

/**
 * El tercer párrafo del div seccionPrimera se colocará justo antes del primer 
 * párrafo(que no tiene por qué ser el primer elemento) del div 
 * seccionTercera(desaparecerá de seccionPrimera).
 */
function cambiarPosicionParrafo() {
    let parrafo = document.querySelectorAll("#seccionPrimera p")[2];
    let seccionTercera = document.getElementById("seccionTercera");
    let nodoSiguiente = document.querySelectorAll("#seccionTercera p")[0];
    seccionTercera.insertBefore(parrafo, nodoSiguiente);
    document.getElementById("parrafoSecPrim3").removeEventListener("click", cambiarPosicionParrafo);

}

/**
 * Crea un div nuevo que se añadirá tras el div seccionSegunda.
 * Clona(con todos sus descendientes) el elemento div que contiene la lista y añádelo como 
 * elemento hijo del nuevo div creado.
 */
function clonarDivLista() {
    let nuevoDiv = document.createElement("div");
    document.body.appendChild(nuevoDiv);

    let divLista = document.getElementById("seccionLista");
    let nuevoDivLista = divLista.cloneNode(true);
    nuevoDiv.appendChild(nuevoDivLista);
    document.getElementById("encabezado1").addEventListener("mouseover", eliminarFila, false);
    document.getElementById("segundoH2").removeEventListener("click", clonarDivLista);
}

/**
 * Las funciones que se detallan a continuación son las que irían en el documento trabajarConDom.js
 */
function aceptar() {
    let nodoNombre = document.getElementById("nombre");
    nodoNombre.focus();
}

function cancelar() {
    let nodoNombre = document.getElementById("nombre");
    nodoNombre.blur();
}