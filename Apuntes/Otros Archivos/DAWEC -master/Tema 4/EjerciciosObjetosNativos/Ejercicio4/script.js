//Escribe una función que, dada una fecha que le llega como parámetro(3 parámetros que
//    almacenarán, respectivamente, el día, el mes y el año), saque por consola la siguiente
//    información:
//    a. Si se trata de un día de fin de semana o no.
//    b. La diferencia en días con la fecha actual.
//    c. El número de días pasados desde el comienzo del año de la fecha.
    
function saberSiEsFinDeSemana(dia = 29,mes=9,año=2022) {
    let fecha = new Date(año, mes, dia)
    console.log(fecha.getDay())
    if (fecha.getDay()==6||fecha.getDay()==7) {
        console.log("Es fin de semana")
        
    } else {
        console.log("No es fin de semana" )
        
    }
}