let css = document.querySelector("#css");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let gradient =  document.querySelector("#gradient");

function setGradient() {
    gradient.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.innerHTML = gradient.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);