//Comprueba si en una cadena de caracteres alfanuméricos, pedida por pantalla al
//usuario, hay 10 dígitos seguidos cualesquiera.
function comprobarNumeros() {
    let cadenaUsuario = prompt(
        "Introduce una cadena para comprobar si tiene 10 numeros seguidos"
    );
    let expresionRegular = /\d{10}/;
    if (expresionRegular.test(cadenaUsuario)) {
        return console.log("Hay 10 Numeros");
    }
    console.log("No hay 10 Numeros");
}
//Lo mismo que en el punto anterior pero que el patrón buscado esté al final de la
//cadena.
function comprobarNumerosFinalCadena() {
    let cadenaUsuario = prompt(
        "Introduce una cadena para comprobar si tiene 10 numeros al final"
    );
    let expresionRegular = /\d{10}$/;
    if (expresionRegular.test(cadenaUsuario)) {
        return console.log("Hay 10 Numeros al final");
    }
    console.log("No hay 10 Numeros al final");
}
// Comprueba que una fecha tiene el formato DD-MM-AAAA o DD-MM-AA. Haz las
//comprobaciones para las fechas 11-11-2020, 11-11-20 y 11/11/2020.
function comprobarFecha() {
    let cadenaUsuario = prompt(
        "Introduce una cadena para comprobar es DD-MM-AAAA o DD-MM-AA"
    );
    let expresionRegular2ParaYear = /\d{2}-\d{2}-\d{2}/;
    let expresionRegular4ParaYear = /\d{2}-\d{2}-\d{4}/;
    if (expresionRegular4ParaYear.test(cadenaUsuario)) {
        return console.log("Patron DD-MM-AAAA ");
    }

    if (expresionRegular2ParaYear.test(cadenaUsuario)) {
        return console.log("Patron DD-MM-AA ");
    }
    console.log("No coincide con el patron");
}
//Desarrolla el código necesario para validar una dirección de correo electrónico
//pedida al usuario. Se ha de validar que su dominio sea ’es’, ‘com’, ‘net’ u ‘org’. Se
//mostrará por consola si se trata de una dirección válida o no.
function comprobarCorreos() {
    let cadenaUsuario = prompt("Introduce un correo");
    let expresionRegularCorreo = /.(es|net|com|org)$/;
    if (expresionRegularCorreo.test(cadenaUsuario)) {
        return console.log("Correo Valido");
    }
    console.log("Correo no valido");
}
//Crea un patrón que busque en el texto “Paca llevaba una vaca en la baca que se hizo
//caca” las palabras paca, vaca, baca y caca. No se diferenciará entre mayúsculas y
//minúsculas. Utilizando el método correcto, muestra por consola todas las
//coincidencias encontradas, que serán devueltas por dicho método en un array.
function buscarPatrones() {
    let texto = "Paca llevaba una vaca en la baca que se hizo caca";
    let patron1 = /paca|vaca|baca|caca/gi;
    console.log(`Palabras: ${texto.match(patron1).length} `);
}
//Crea un patrón para validar un DNI (sin tener en cuenta si la letra es o no la correcta),
//que se pedirá al usuario
function validarDNI() {
    let stringDNI = prompt("Introduce un DNI");
    let expresionRegularDNI = /\d{9}[A-Z]$/;
    if (expresionRegularDNI.test(stringDNI)) {
        return console.log("DNI Valido");
    }
    return console.log("DNI Invalido");
}
