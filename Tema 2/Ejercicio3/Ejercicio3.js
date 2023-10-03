function ejercicio3() {
    let array = [
        "lista",
        "tela",
        "bies",
        "hilo",
        "tijeras",
        "maquina de coser",
        "boton",
      ];
      //Elimina el bies. Muestra el array por consola.
      array.splice(2, 1);
      console.log(array);
      //Añade, entre hilo y tijeras, hilo torzal. Muéstralo de nuevo por consola.
      array.splice(3, 0, "hilo torzal");
      console.log(array);
      //Quita tijeras y sustitúyelas por cúter rotatorio y mesa de corte. Una vez mas, muestra el array por consola.
      array.splice(4, 1, "cúter rotatorio", "mesa de corte");
      console.log(array);
      // Crea, a partir del primer array, dos nuevos donde el primero incluya los tres primeros elementos del original y el segundo del cuarto al sexto.
      let array1 = array.slice(0, 3);
      let array2 = array.slice(4, 7);
      console.log(array1);
      console.log(array2);
      //En el segundo de los nuevos arrays creados:
      //Incluye, en la primera posición, remalladora.
      array2.unshift("remalladora");
      //Incluye, en la penúltima posición, cinta métrica.
      array2.splice(array2.length - 1, 0, "cinta métrica");
      //Muestra por consola el contenido de los tres arrays.
      console.log(ordenarArray(array));
      console.log(ordenarArray(array1));
      console.log(ordenarArray(array2));
    
    }
    function ordenarArray(arr) {
        arr.sort(function (elem1, elem2) {
          return elem1.length - elem2.length;
        });
        return arr;
      }