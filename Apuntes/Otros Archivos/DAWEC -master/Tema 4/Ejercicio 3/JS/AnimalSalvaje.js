class AnimalSalvaje extends Animal {
  cautivo;
  peligroExtincion;
  constructor(especie, habitatNatural, edadMaxima, peligroExtincion, cautivo) {
    super(especie, habitatNatural, edadMaxima);
    this.cautivo = cautivo;
    this.peligroExtincion = peligroExtincion;
  }
  getCautivo() {
    return this.cautivo;
  }
  getPeligroExtincion() {
    return this.peligroExtincion;
  }
}
