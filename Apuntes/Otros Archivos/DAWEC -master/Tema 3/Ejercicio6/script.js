function parte123() {
  // A partir de un array que contenga 15 notas entre 1 y 10, obtén otro en el que solo
  //se incluyan los aprobados.
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5.5, 7.5, 0, 6.5, 6.4];
  let arrayAprobado = array.filter((nota) => {
    return Number(nota) >= 5;
  });
  console.log(arrayAprobado);

  //Dados los arrays del punto anterior, busca la posición, en ambos, de la nota con
  //valor 5.5. Comprueba el valor devuelto en caso de que no exista dicha nota.
  console.log(array.findIndex((nota) => Number(nota) == 5.5));
  console.log(arrayAprobado.findIndex((nota) => Number(nota) == 5.5));

  //Dado el array original del primer punto, comprueba si todos son aprobados.
  console.log(array.every((nota) => Number(nota) >= 5));
}

function parte45() {
  //A partir de un array que contenga 12 palabras, obtén otro en el que solo se
  //incluyan las que tengan menos de 6 caracteres.

  let arrayPalabras = [
    "hola",
    "palabrademasde6",
    "jjjjjjj",
    "a",
    "b",
    "c",
    "a",
    "y",
    "abcddcba",
    "a",
    "b",
    "c",
    "o",
  ];
  let palabrasDeMenosDe6Letras = arrayPalabras.filter(
    (palabra) => palabra.length < 6
  );
  console.log(palabrasDeMenosDe6Letras);
  //Dado el array original del punto anterior, recupera el primer elemento cuya última
  //letra sea una o.
  console.log(arrayPalabras.find((palabra) => palabra[0] == "o"));
}
function parte6() {
  let numeroTelefono = [1234, 3456, 7890, 7412, 8529, 9637, 1233];
  console.log(numeroTelefono.some((telefono) => String(telefono).slice(-1) == 3));
}
