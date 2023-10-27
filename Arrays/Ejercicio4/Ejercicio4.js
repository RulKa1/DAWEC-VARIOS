function Ejercicio4() {
   let cadenaPalabras = prompt("Escribe numeros separados por / ");
   let arrayPalabras = cadenaPalabras.split("/");
   arrayPalabras.sort(  
    function (param1, param2) {
        return Number(param1) - Number(param2)
    }

   )

   console.log(arrayPalabras.join("-"))

}
