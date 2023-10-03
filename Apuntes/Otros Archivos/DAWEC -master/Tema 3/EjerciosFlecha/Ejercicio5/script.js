function main() {
    let num = prompt("Introduce un Numero")
    const tablaMultiplicar = (num, numMultiplicar) => {return num * numMultiplicar}
    for (let index = 0; index <= 10; index++) {
        console.log(index +"x" +num + " " +tablaMultiplicar(num, index) )
    }
    
}