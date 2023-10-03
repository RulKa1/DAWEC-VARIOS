class Libro {
  nombre;
  ISBN;
  fechaPubli;
  prestado;
  constructor(nombre, ISBN, fechaPubli, prestado = false) {
    this.nombre = nombre;
    this.ISBN = ISBN;
    this.fechaPubli = fechaPubli;
    this.prestado = prestado;
  }

  getNombre() {
    return this.nombre;
  }
  getISBN() {
    return this.nombre;
  }
  getfechaPubli() {
    return this.nombre;
  }
  getPrestado() {
    if (prestado) {
      return "esta Prestado";
    }
    return "esta Disponible";
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  setISBN(ISBN) {
    this.ISBN = ISBN;
  }
  setfechaPubli(fechaPubli) {
    this.fechaPubli = fechaPubli;
  }
  setPrestado(prestado) {
    this.prestado = prestado;
  }
  prestamo() {
    this.prestado = true;
  }
  devolucion() {
    this.prestado = false;
  }
  toString() {
    return (
      "El libro " + this.nombre + " Con ISBN " + this.ISBN + this.getPrestado()
    );
  }
}
