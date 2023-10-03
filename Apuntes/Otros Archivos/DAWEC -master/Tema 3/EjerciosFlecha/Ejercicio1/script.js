function main() {
  let numero1 = prompt("Introduce un numero");
  let numero2 = prompt("Introduce otro numero");

  const suma = (numero1, numero2) => {
    return Number(numero1) + Number(numero2);
  };
  console.log("La suma de los numeros Introducido es"+suma(numero1, numero2));
}
