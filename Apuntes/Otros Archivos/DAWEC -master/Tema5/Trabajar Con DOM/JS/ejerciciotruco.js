function cambiarEstilos() {
  let encabezado = document.getElementsByTagName("h1")[0];
  let parrafoCambiar = encabezado.nextElementSibling;
  if (!parrafoCambiar.hasAttribute("class")) {
    parrafoCambiar.setAttribute("class", "estiloBase");
    return;
  }
  if (parrafoCambiar.classList.contains("estiloResaltado")) {
    parrafoCambiar.classList.add("estiloFuente");
    encabezado.removeAttribute("onclick");
    return;
  }
  if (parrafoCambiar.classList.contains("estiloBase")) {
    parrafoCambiar.classList.add("estiloResaltado");
    return;
  }
}
