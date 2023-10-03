//3. Crea una página web que:
//a. Contenga un botón con el texto “Lanzar Dados”.
//b. Contenga un contenedor donde se verá el resultado del proceso que se detallará a
//continuación.
//c. Al pulsar el botón se generará un número aleatorio entre el 1 y el 6, 500 veces.
//d. Por pantalla se mostrará el número de veces que ha salido cada uno de los números
//del dado.
function dados() {
  arrayNumeros = [0, 0, 0, 0, 0, 0];
  let texto = "";

  for (let index = 0; index < 500; index++) {
    let numeroRandom = Math.floor(Math.random() * 6 + 1);
    arrayNumeros[numeroRandom - 1]++;
  }
  console.log(arrayNumeros);
  let textoResultado = document.createElement("p");
  arrayNumeros.forEach((element, index) => {
    texto +=
      "Numero " + (index + 1) + " Ha salido " + element + " Veces" + "\n";
  });
  console.log(texto);
  textoResultado.innerHTML = texto;
}
