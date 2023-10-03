function main() {
    let edad = prompt("Introduce tu edad")
    const votar = edad =>{
        if (Number(edad)>=18) {
            return "Puede Votar"
        }else{
            return "Lo siento, aún no puedes votar"
        }
    }
    console.log(votar(edad))
    
}