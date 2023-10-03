function ejercicio4() {
  let cadenaPalabras = prompt("Escribe numeros separados por /");
  let arrayPalabras = cadenaPalabras.split("/");
  arrayPalabras.sort(
    function (elem1, elem2) {
        return Number(elem1)- Number(elem2)
    }
  )
  console.log(arrayPalabras.join("-"))
}
