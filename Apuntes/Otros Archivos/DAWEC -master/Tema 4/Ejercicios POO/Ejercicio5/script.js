class NIF {
  numero;
  letra;
  constructor(numero) {
    this.numero = numero;
    letra = this.calcularLetraDni(this.numero);
  }
  calcularLetraDni(numeroDni) {
    let restoDivision;
    let arrayLetrasDni = [
      "T",
      "R",
      "W",
      "A",
      "G",
      "M",
      "Y",
      "F",
      "P",
      "D",
      "X",
      "B",
      "N",
      "J",
      "Z",
      "S",
      "Q",
      "V",
      "H",
      "L",
      "C",
      "K",
      "E",
    ];
    numeroDni = prompt("Dime tu DNI");
    restoDivision = numeroDni % 23;
    return arrayLetrasDni[restoDivision];
  }
}
