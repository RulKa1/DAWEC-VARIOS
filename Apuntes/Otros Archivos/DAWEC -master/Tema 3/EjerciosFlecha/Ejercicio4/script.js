function main() {
    let gradosCelsius = prompt("Introduce grados Celsius para convertir")
    const gradoFahrenheit = gradosCelsius => {return (Number(gradosCelsius) * 1.8)+32}
    console.log(gradoFahrenheit(gradosCelsius))
    
}