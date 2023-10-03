function main() {
  let fechaNacimiento1 = new Date("2-May-2002");
  let fechaNacimiento2 = new Date("05-02-2002");
  console.log(fechaNacimiento1.getDay());
  console.log(fechaNacimiento2.getDay());
  //Modifica una de ellas para que contenga la fecha del cumpleaños de este año
  //(cambia sólo el año).
  fechaNacimiento2.setFullYear(2022);
  console.log(fechaNacimiento2.getDay());
  //Calcular el nº de días que han pasado desde el día que naciste hasta hoy.
  let fechaAhora = new Date();
  let difference = fechaAhora.getTime() - fechaNacimiento1.getTime();
  console.log(difference / (1000 * 3600 * 24));
}
function mainParte2() {
  let nocheVieja = new Date("31-December-2022");
  console.log(nocheVieja);
}
function fechaHoy() {
  let fechaActual = new Date();
  console.log(fechaActual.toString());
  console.log(fechaActual.toUTCString());
  console.log(fechaActual.toTimeString());
  console.log(fechaActual.toISOString());
  console.log(fechaActual.toLocaleString());
}
//Escribe una función que devuelva el número de días que tiene un mes concreto. Como
//parámetros se le pasarán el año y el mes de forma numérica(1: Enero, 2:Febrero, etc.)
function numeroDeDiasPorMes(mes, año) {
  return new Date(año, mes, 0).getDate();
}
//Crea una función que compare dos fechas llegadas por parámetros:
//o Las fechas serán objetos de tipo Date.
//o El texto que devolverá la función indicará que la primera es mayor que la
//segunda, que la segunda es mayor que la primera o que ambas son iguales.
function compararFechas(fecha1= new Date("2/1/2002"), fecha2 = new Date("2/1/2002")) {
  if (fecha1.getTime() === fecha2.getTime()) {
    return console.log("Son la misma Fecha");
  }
  if (fecha1 > fecha2) {
    return console.log("La primera Fecha es mayor que la segunda");
  } else {
    return console.log("La segunda Fecha es mayor que la segunda");
  }
}
