class AnimalDomestico extends Animal {
  nombre;
  identificador;
  vacunado;
  constructor(
    especie,
    habitatNatural,
    edadMaxima,
    nombre,
    identificador,
    vacunado
  ) {
    super(especie, habitatNatural, edadMaxima);
    this.nombre = nombre;
    this.identificador = identificador;
    this.vacunado = vacunado;
  }
  getEdadMaxima() {
    return this.nombre;
  }
  getIdentificador() {
    return this.identificador;
  }
  getVacunado() {
    return this.vacunado;
  }
}
