class Contador {
  constructor(contador) {
    this.contador = contador;
  }
  aumentarContador(cantidad = 1) {
    this.contador += cantidad;
  }
  aumentarContador(cantidad = 1) {
    this.contador -= cantidad;
  }
  getContador() {
    return this.contador;
  }
  setContador(contador) {
    this.contador = contador;
  }
}
