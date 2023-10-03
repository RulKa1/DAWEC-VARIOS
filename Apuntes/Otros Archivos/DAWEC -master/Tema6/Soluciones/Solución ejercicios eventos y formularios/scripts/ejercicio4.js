//a
let cadenaA = prompt("Introduce un texto de, al menos, 20 caracteres alfanuméricos.");
var regexA = /^\d{10}/;
console.log(regexA.test(cadenaA));
//b
let cadenaB = prompt("Introduce un texto de, al menos, 20 caracteres alfanuméricos.");
var regexB = /^\d{10}$/;
console.log(regexB.test(cadenaB));
//c
var regexC = /^(\d{1,2}-){2}\d{2}(\d{2})?$/;
console.log(regexC.test('11-11-2020'));
console.log(regexC.test('11-11-20'));
console.log(regexC.test('11/01/2020'));
//d
var regexD = /\w+@\w+\.(es|net|com|org)/;
let email = prompt("Introduzca una dirección de correo electrónico válida");
if (regexD.test(email)) {
    console.log("Dirección válida");
} else {
    console.log("La dirección introducida no tiene un formato correcto");
}

//e
var regexE = /[pvbc]aca/gi;
var cadenaE = "Paca llevaba una vaca en la baca que se hizo caca";
if (regexE.test(cadenaE)) {
    alert("Expresión regular bien formada");
} else {
    alert("Expresión regular incorrecta");
}
let resultado = cadenaE.match(regexE);
console.log(resultado);
//f
let regExpF = /^\d{8}[a-zA-Z]$/;
let dni = prompt("Introduzca su DNI");
if (!regExpF.test(dni)) {
    alert("El formato del dni introducido no es correcto");
}