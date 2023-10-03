function ejercicio1() {
  let array = [];
  let cadena;
  do {
    cadena = prompt("Introduce una cadena");
    if (!cadena == "") {
      arr.push(cadena);
    }
  } while (!cadena == "");
  arr.sort(
    function (elem1, elem2) {
        return Number(elem1)- Number(elem2)
    }
  )
  console.log(arr)

}
