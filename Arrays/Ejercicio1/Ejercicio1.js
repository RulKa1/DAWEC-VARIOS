function Ejercicio1() {
    let numero;
    let cadena;
    let añadir;
    let arrayPersonas = [];
    do {
        numero = prompt("Introduce un numero");
        if (numero !== null && numero !== "") {
            numero = parseInt(numero); // Convertir a número
        } else {
            break; // Salir del bucle si no se ingresa un número válido
        }
        cadena = prompt("Introduce una cadena");
        añadir = confirm("Desea añadir " + cadena + " en la posición " + numero);
        if (añadir) {
            añadirNombre(numero, arrayPersonas, cadena);
        } else {
            borrarNombre(numero, arrayPersonas);
        }
    } while (!isNaN(numero)); // Salir del bucle si no se ingresa un número
    console.log(arrayPersonas);
}

function añadirNombre(posicion, array, nombre) {
    if (posicion >= 0) {
        array[posicion] = nombre;
    } else {
        array.push(nombre);
    }
}


function borrarNombre(posicion, array) {
    if (posicion >= 0 && posicion < array.length) {
        array.splice(posicion, 1); // Eliminar elemento en la posición especificada
    }
}
