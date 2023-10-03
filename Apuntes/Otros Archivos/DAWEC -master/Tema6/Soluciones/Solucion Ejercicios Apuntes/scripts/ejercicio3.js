window.onload = () => {
  document
    .getElementById("tablaDatos")
    .addEventListener(
      "click",
      crearNuevaFila.bind(document.getElementById("tablaDatos")),
      false
    );
};

function crearNuevaFila() {
  let numFilas = this.childElementCount;
  let nuevaFila = document.createElement("tr");
  nuevaFila.setAttribute("id", numFilas);
  let contenido =
    "<td>" + (numFilas + 1) + "</td><td>" + (numFilas + 2) + "</td>";
  nuevaFila.innerHTML = contenido;
  this.appendChild(nuevaFila);
  document.getElementById(numFilas).addEventListener(
    "click",
    (event) => {
      alert("Id: " + event.currentTarget.id);
    },
    false
  );
}
