function rangoDeMathRandom() {
  Math.floor(Math.random() * 3);
}
function parte2() {
  let num1 = Math.floor(Math.random() * 100+1);
  let num2 = Math.floor(Math.random() * 100+1);
  let num3 = Math.floor(Math.random() * 100+1);

  console.log(Math.max(num1,num2,num3))
}
function parte3() {
    let num1 = (Math.random() * 100+1);
    let num2 = (Math.random() * 100+1);
    let num3 = (Math.random() * 100+1);
    let redondearArriba = confirm("Quieres Redondear Para arriba");
    if (redondearArriba) {
        arrayNumeritos=[Math.ceil(num1),Math.ceil(num2),Math.ceil(num3)]
        console.log(Math.min(arrayNumeritos[0],arrayNumeritos[1],arrayNumeritos[2]))

    }else{
        arrayNumeritos=[Math.floor(num1),Math.floor(num2),Math.floor(num3)]
        console.log(Math.max(arrayNumeritos[0],arrayNumeritos[1],arrayNumeritos[2]))

    }
    console.log(arrayNumeritos)
 
    
}






































