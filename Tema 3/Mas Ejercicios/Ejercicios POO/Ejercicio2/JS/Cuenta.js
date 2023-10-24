class Cuenta {
  ingreso;
  reintegro;
  transferencia;

  constructor(reintegro) {
    this.reintegro = reintegro;
  }
  realizarIngreso(ingreso) {
    this.reintegro += ingreso;
  }
  realizarTransferencia(transferencia) {
    this.reintegro -= transferencia;
  }
}
