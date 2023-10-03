class LenguageProg {
  nombre = "Java";
  categoria = "estructurado";
  interpretado = false;
  fechaCreacion = 1970;
  constructor(categoria, nombre, interpretado, fechaCreacion) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.interpretado = interpretado;
    this.fechaCreacion = fechaCreacion;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  setCategoria(categoria) {
    this.categoria = categoria;
  }
  setInterpretado(interpretado) {
    this.interpretado = interpretado;
  }
  setFechaCreacion(fechaCreacion) {
    this.fechaCreacion = fechaCreacion;
  }

  getinfoLenguaje() {
    return (
      "Nombre del lenguaje " +
      this.nombre +
      " Categoria" +
      this.categoria +
      " interpretacion" +
      this.interpretado +
      " Fecha de creacion"
    );
  }
}
