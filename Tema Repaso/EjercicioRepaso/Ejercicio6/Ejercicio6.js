const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const rosaRadio = document.getElementById("rosa");
const verdeRadio = document.getElementById("verde");
const azulRadio = document.getElementById("azul");

rosaRadio.addEventListener("change", () => {
    div1.style.backgroundColor = "lightpink";
    div2.style.backgroundColor = "pink";
    div3.style.backgroundColor = "darkpink";
    div1.textContent = "Div 1";
});

verdeRadio.addEventListener("change", () => {
    div1.style.backgroundColor = "lightgreen";
    div2.style.backgroundColor = "green";
    div3.style.backgroundColor = "darkgreen";
    div1.textContent = "Div 1";
});

azulRadio.addEventListener("change", () => {
    div1.style.backgroundColor = "lightblue";
    div2.style.backgroundColor = "blue";
    div3.style.backgroundColor = "darkblue";
    div1.textContent = "Div 2";
});