window.addEventListener("load", event =>{
    document.getElementById("aviso").addEventListener("click", aviso, false);
    document.getElementById("parar").addEventListener("click", aviso, false);

    document.addEventListener("keyup", calcularDNI, false);

    document.addEventListener("dblclick", cambiarColor, false);
}, false);

//Ejercicio 1
let idIntervalo = "";

function aviso(event){
    if (event.currentTarget.id == "aviso") {
        idIntervalo = setInterval(() => alert("Este sábado a las 3 son las 2"), 5000);
    }else {
        clearInterval(idIntervalo);
    }
}

//Ejercicio 2
function calcularDNI(event) {
    (document.getElementById("parrafo")).innerHTML = "";
    let parrafo = document.createElement("p");
	let letra = String.fromCharCode(event.keyCode);
	parrafo.innerHTML = "DNIs con letra " + letra + " ";
	for (let i = 0; i <= 9999; i++) {
		if (letraDNI(i) === letra) {
			parrafo.innerHTML += i + " ; ";
		}
    }
    (document.getElementById("parrafo")).appendChild(parrafo);
}

function letraDNI(numeroDni) {
	let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	return letras[numeroDni % 23];
}

//Ejercicio 3
function cambiarColor(event){	
    document.body.bgColor="rgb("+numeroAleatorio(0,255)+","+numeroAleatorio(0,255)+","+numeroAleatorio(0,255)+")";
}

function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
