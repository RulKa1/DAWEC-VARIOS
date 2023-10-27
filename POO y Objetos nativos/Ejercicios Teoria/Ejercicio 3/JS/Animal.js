class Animal {
  especie;
  habitatNatural;
  edadMaxima;

  constructor(especie, habitatNatural, edadMaxima) {
    this.especie = especie;
    this.habitatNatural = habitatNatural;
    this.edadMaxima = edadMaxima;
  }
  getEspecie() {
    return this.especie;
  }
  getHabitatNatural() {
    return this.habitatNatural;
  }
  getEdadMaxima() {
    return this.edadMaxima;
  }
}
