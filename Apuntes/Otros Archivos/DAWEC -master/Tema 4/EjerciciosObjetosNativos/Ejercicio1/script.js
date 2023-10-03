function login(numero = "3") {
  let texto = prompt("Introduzca nombre:1erApellido:numeroTelefono");
  textoMayus = texto.toUpperCase();
  arrayParametrosDeUsuario = textoMayus.split(":");
  arrayParametrosDeUsuario[2] = arrayParametrosDeUsuario[2].replaceAll("6", numero);
  console.log(arrayParametrosDeUsuario);
  let nombreUsuario = arrayParametrosDeUsuario[0] +arrayParametrosDeUsuario[1];
  let contraseña = arrayParametrosDeUsuario[2];
  alert(`Bienvenido :\n`
        +`Tu nombre de usuario es ${nombreUsuario}\n`
        +`Tu Contraseña es ${contraseña}\n`)
}
function inicio() {
  let numero;
  do {
    numero = prompt("Introduce un numero entre 0  y 9");
  } while (numero < 0 || numero > 9);
  login(Number(numero));
}
