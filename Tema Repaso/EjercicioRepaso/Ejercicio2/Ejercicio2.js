function convertirAEuros() {
    const dolares = parseFloat(document.getElementById("dolares").value);
    const euros = dolares * 0.86; 
    return alert ( document.getElementById("resultado").textContent = `${dolares} Dólares son aproximadamente ${euros.toFixed(2)} Euros.`);
}

function convertirADolares() {
    const euros = parseFloat(document.getElementById("euros").value);
    const dolares = euros / 0.86; 
   return alert ( document.getElementById("resultado").textContent = `${euros} Euros son aproximadamente ${dolares.toFixed(2)} Dólares.`);
}