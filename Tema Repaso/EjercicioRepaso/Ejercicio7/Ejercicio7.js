function comprobarCarnet() {
  if (document.getElementById("carnetSi").checked) {
    quitarDisabledTipoCoche();
  } else {
    añadirDisabledTipoCoche();
  }
}
function quitarDisabledTipoCoche() {
  let arrayTipoCarnet = document.getElementsByName("tipoCarnet");
  for (let index = 0; index < arrayTipoCarnet.length; index++) {
    const element = arrayTipoCarnet[index];
    console.log(element);
    element.disabled = false;
  }
  let divGeneral = document.createElement("div");
  divGeneral.id = "divGeneral";
  document.body.appendChild(divGeneral);
}
function añadirDisabledTipoCoche() {
  let arrayTipoCarnet = document.getElementsByName("tipoCarnet");
  for (let index = 0; index < arrayTipoCarnet.length; index++) {
    const element = arrayTipoCarnet[index];
    element.disabled = true;
    element.checked = false;
  }
  quitarDivGeneral();
}
function crearTablasTipoCarnet() {
  if (document.getElementById("coche").checked) {
    tablaCoche();
  } else if (document.getElementById("moto").checked) {
    tablaMoto();
  } else {
    tablaCoche();
    tablaMoto();
  }
}
function tablaCoche() {
  resetearDivGeneral();

  console.log("tablaCoche");

  let divCoche = document.createElement("div");
  let tablaCoche = document.createElement("table");

  divCoche.id = "divCoche";

  divGeneral.appendChild(divCoche);
  divCoche.appendChild(tablaCoche);

  let tr1 = document.createElement("tr");
  let tr2 = document.createElement("tr");
  let tr3 = document.createElement("tr");

  let coche1 = document.createElement("th");
  let coche2 = document.createElement("th");
  let coche3 = document.createElement("th");

  let plazas1 = document.createElement("th");
  let plazas2 = document.createElement("th");
  let plazas3 = document.createElement("th");

  coche1.innerHTML = "Coche1";
  coche2.innerHTML = "Coche2";
  coche3.innerHTML = "Coche3";

  plazas1.innerHTML = "5 plazas";
  plazas2.innerHTML = "2 plazas";
  plazas3.innerHTML = "7 plazas";

  tablaCoche.appendChild(tr1);
  tr1.appendChild(coche1);
  tr1.appendChild(plazas1);

  tablaCoche.appendChild(tr2);
  tr2.appendChild(coche2);
  tr2.appendChild(plazas2);

  tablaCoche.appendChild(tr3);
  tr3.appendChild(coche3);
  tr3.appendChild(plazas3);
}
function tablaMoto() {
  if (!document.getElementById("ambos").checked) {
    resetearDivGeneral();
  }

  console.log("tablaMoto");

  let divMoto = document.createElement("div");
  let tablaMoto = document.createElement("table");

  divMoto.id = "divMoto";

  divGeneral.appendChild(divMoto);
  divMoto.appendChild(tablaMoto);

  let tr1 = document.createElement("tr");
  let tr2 = document.createElement("tr");
  let tr3 = document.createElement("tr");

  let moto1 = document.createElement("th");
  let moto2 = document.createElement("th");
  let moto3 = document.createElement("th");

  let cilindrada1 = document.createElement("th");
  let cilindrada2 = document.createElement("th");
  let cilindrada3 = document.createElement("th");

  moto1.innerHTML = "Moto1 ";
  moto2.innerHTML = "Moto2 ";
  moto3.innerHTML = "Moto3 ";

  cilindrada1.innerHTML = "50cc";
  cilindrada2.innerHTML = "125cc";
  cilindrada3.innerHTML = "150cc";

  tablaMoto.appendChild(tr1);
  tr1.appendChild(moto1);
  tr1.appendChild(cilindrada1);

  tablaMoto.appendChild(tr2);
  tr2.appendChild(moto2);
  tr2.appendChild(cilindrada2);

  tablaMoto.appendChild(tr3);
  tr3.appendChild(moto3);
  tr3.appendChild(cilindrada3);
}
function resetearDivGeneral() {
  let divGeneral = document.getElementById("divGeneral");
  let nuevoDiv = document.createElement("div");
  nuevoDiv.id = "divGeneral";

  document.body.append(nuevoDiv);
  divGeneral.remove();
}
function quitarDivGeneral() {
  let divGeneral = document.getElementById("divGeneral");
  divGeneral.remove();
}
