
var arrayDeAnimales = [];
  
function nuevaMascota() {
  let especie = prompt("Introduce el nombre de la especie");
  let habitatNatural = prompt("Introduce el habitat Natural");
  let edadMaxima = prompt("Introduce la edad Maxima");
  let nombre = prompt("Introduce el nombre");
  let identificador = prompt("Introduce el identificador");
  let vacunado = prompt("Introduce si se encuentra vacunado");

  const animal = new AnimalDomestico(
    especie,
    habitatNatural,
    Number(edadMaxima),
    nombre,
    identificador,
    Boolean(vacunado)
  );
  arrayDeAnimales.push(animal);
}

function nuevoAnimalSalvaje() {
  let especie = prompt("Introduce el nombre de la especie");
  let habitatNatural = prompt("Introduce el habitat Natural");
  let edadMaxima = prompt("Introduce la edad Maxima");
  let cautivo = prompt("Introduce si se encuentra Cautivo");
  let peligroExtincion = prompt(
    "Introduce si se encuentra en peligro de Extincion"
  );

  const animal = new AnimalSalvaje(
    especie,
    habitatNatural,
    Number(edadMaxima),
    Boolean(cautivo),
    Boolean(peligroExtincion)
  );
  arrayDeAnimales.push(animal);
}

function mascotasConEdadMaximaSuperiorA10Años() {
  arrayDeAnimales.forEach((element) => {
    if (element.edadMaxima > 10) {
      console.log(element);
    }
  });
}
