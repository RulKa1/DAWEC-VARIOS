function pedirFecha() {
  let fechaPedidaString = prompt(
    "Introduce una fecha con el siguente formato DD/MM/AAAA"
  );
  var partesFecha = fechaPedidaString.split("/");
  let fechaPedida = new Date(
    partesFecha[2],
    partesFecha[1] - 1,
    partesFecha[0]
  );

  let fechaHoy = new Date();
  let difference = fechaHoy.getTime() - fechaPedida.getTime();
  console.log(difference / (1000 * 3600 * 24) + " Dias");
  console.log(difference / (1000 * 3600 * 24 * 31) + " Meses");
  //Dependiendo de la hora del día, muestre un mensaje por pantalla diciendo “Buenos
  //días”, “Buenas tardes” o “Buenas noches.” Seguido de “Tienes X años y X meses”.
  fechatest = new Date();
  console.log(fechatest.getHours());
  if (fechaHoy.getHours() >= 6 && fechaHoy.getHours() <= 13) {
    return console.log("Buenos dias");
  }
  if (fechaHoy.getHours() >= 14 && fechaHoy.getHours() <= 19) {
    return console.log("Buenas Tardes");
  } else {
    return console.log("Buenas Noches");
  }
}
