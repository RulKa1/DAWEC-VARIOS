function Ejercicio5() {
    console.log(funcionNormalCuadrado(2));
  
    const cuboAnonimo = function (num) {
      return num * num * num;
    };
    console.log(cuboAnonimo(2));
    
    
    const cuboFlechaExplicito = (numero) => {return numero * numero * numero}
    console.log(cuboFlechaExplicito(2))
   
    const cuboFlechaImplicito = numero =>  numero * numero * numero
    console.log(cuboFlechaImplicito(2))
  
  }
  
  function funcionNormalCuadrado(num) {
    return num * num * num;
  }
  