function mostrarAnimales() {
    var tipo = document.getElementById("tipo").value;
    var resultado = document.getElementById("resultado");

    // Realizar una petición al servidor para obtener los datos del tipo seleccionado
    fetch("http://localhost:3000/animales")
      .then(response => response.json())
      .then(data => {
        // Filtrar los animales del tipo seleccionado
        var animales = data.filter(animal => animal.Tipo === tipo);

        // Mostrar los nombres y rasgos de los animales
        resultado.innerHTML = "";
        animales.forEach(animal => {
          resultado.innerHTML += "<h3>" + animal.Nombre + "</h3>";
          resultado.innerHTML += "<p>Rasgos: " + animal.Rasgos + "</p>";
        });
      });
  }