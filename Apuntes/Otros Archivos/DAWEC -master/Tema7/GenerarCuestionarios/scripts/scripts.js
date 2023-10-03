window.onload = () => {
    getTemas()
    document.getElementById("nuevoTest").addEventListener("submit", generarPreguntasTema);
    document.getElementById("nuevoTema").addEventListener("submit", comprobarTemaNuevo);
    document.getElementById("nuevaPregunta").addEventListener("submit", añadirPreguntaNuevaJSON);

}
function getTemas() {
    let selectTemas = document.getElementById("temas");
    let selectTema = document.getElementById("tema");
    selectTema.innerHTML = "";
    selectTemas.innerHTML = "";
    fetch('http://localhost:3000/temas')
        .then((response) => response.json())
        .then((json) => añadirTemas(json));

}
function añadirTemas(temas) {
    temas.forEach(element => {
        añadirTemasAlSelect(element)
    });
}
function añadirTemasAlSelect(nombreTema) {
    let select = document.getElementById("temas");
    let select2 = document.getElementById("tema");
    let option = document.createElement("option");
    let option2 = document.createElement("option");
    option.id = nombreTema.id;
    option.innerText = nombreTema.nombre;
    option2.id = nombreTema.id;
    option2.innerText = nombreTema.nombre;

    select.append(option);
    select2.append(option2);
}
function generarPreguntasTema(event) {
    event.preventDefault()
    let select = document.getElementById("temas");
    let text = select.options[select.selectedIndex].id;
    fetch(`http://localhost:3000/preguntas?tema=${text}`)
        .then((response) => response.json())
        .then((json) => añadirPreguntas(json));


}
function añadirPreguntas(preguntas) {
    let section = document.getElementById("cuestionario")
    section.innerHTML = ""
    let numeroPreguntas = document.getElementById("numPreguntas").value
    if (preguntas.length < numeroPreguntas) {
        return preguntasInsuficientes(preguntas.length);

    }

    for (let index = 0; index < numeroPreguntas; index++) {
        añadirPreguntasCuestionario(preguntas[index], index);
    }

}
function preguntasInsuficientes(numeroPreguntas) {
    let section = document.getElementById("cuestionario")
    section.innerHTML += `No hay suficientes preguntas el cuestionario unicamente con ${numeroPreguntas} preguntas del tema`

}
function añadirPreguntasCuestionario(pregunta, indice) {
    let section = document.getElementById("cuestionario")
    section.innerHTML += `
    ${pregunta.pregunta}
    <br>
    <input type="radio" id="${pregunta._1}" name="opcionesPregunta${indice}" value="${pregunta._1}">
    <label for="${pregunta._1}">${pregunta._1}</label><br>
    <input type="radio" id="${pregunta._2}" name="opcionesPregunta${indice}" value="${pregunta._2}">
    <label for="${pregunta._2}">${pregunta._2}</label><br>
    <input type="radio" id="${pregunta._3}" name="opcionesPregunta${indice}" value="${pregunta._3}">
    <label for="${pregunta._3}">${pregunta._3}</label><br>
    <input type="radio" id="${pregunta._4}" name="opcionesPregunta${indice}" value="${pregunta._3}">
    <label for="${pregunta._4}">${pregunta._4}</label><br><br>

    `
}
function comprobarTemaNuevo(event) {
    event.preventDefault()
    let tema = document.getElementById("nuevoTemaText").value
    fetch(`http://localhost:3000/temas?nombre=${tema}`)
        .then((response) => response.json())
        .then((json) => {
            if (json.length === 0) {
                añadirTemaNuevoJSON(tema)
            } else {
                alert("Tema Repetido")
            }
        });

}
function añadirTemaNuevoJSON(tema) {
    let url = "http://localhost:3000/temas";
    let nuevoTema = {
        nombre: tema,
    };
    let init = {
        method: 'POST',
        body: JSON.stringify(nuevoTema),
        headers: { 'Content-Type': 'application/json' }
    };
    fetch(url, init)
        .then(response => response.json())
        .then(datosRespuesta => getTemas(datosRespuesta))

}
function añadirPreguntaNuevaJSON(event) {
    event.preventDefault()
    let select = document.getElementById("tema");
    let text = select.options[select.selectedIndex].id;
    let enunciado = document.getElementById("pregunta").value;
    let option1 = document.getElementById("op2").value;
    let option2 = document.getElementById("op2").value;
    let option3 = document.getElementById("op3").value;
    let option4 = document.getElementById("op4").value;
    let respuestCorrecta = document.getElementById("respCorrecta").value;




    let url = "http://localhost:3000/preguntas";
    let nuevaPregunta = {
        tema: text,
        pregunta: enunciado,
        correcta: respuestCorrecta,
        _1: option1,
        _2: option2,
        _3: option3,
        _4: option4,
    };
    let init = {
        method: 'POST',
        body: JSON.stringify(nuevaPregunta),
        headers: { 'Content-Type': 'application/json' }
    };
    fetch(url, init)
        .then(response => response.json())
        .then(datosRespuesta => console.log(datosRespuesta.id));

}
