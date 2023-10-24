class Fecha {
    dia;
    mes;
    year;
    constructor(dia, mes, year) {
      this.dia = dia;
      this.mes = mes;
      this.year = year;
    }
    static recuperarFecha() {
      var fecha = new Date();
      var dia = fecha.getDate();
      var mes = fecha.getMonth() + 1;
      var ano = fecha.getFullYear();
      return new Fecha(dia, mes, ano);
    }
    recuperarFecha() {
      console.log(this.dia + " " + this.mes + " " + this.year);
    }
    toString() {
      return "El año es " +this.year;
    }
  }
  
  fecha1 = new Fecha(1,2,1999)
  fecha2 = new Fecha(1,2,1995)
  fecha3 = new Fecha(1,2,1994)
  fecha4 = new Fecha(1,2,1991)
  fecha5 = new Fecha(1,2,1997)
  fecha6 = new Fecha(1,2,1996)
  let arrayFechas = [fecha1, fecha2,fecha3,fecha4,fecha5,fecha6]; 
  