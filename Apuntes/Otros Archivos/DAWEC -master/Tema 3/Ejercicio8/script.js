function main() {
  let arrayTitulares = Array.from(
    document.getElementsByClassName("titularNoticia")
  );
  arrayTitulares.forEach((element) => {
    let texto = element.innerText;
    if (!texto.includes("tr")) {
      alert(texto);
    }
  });
}
