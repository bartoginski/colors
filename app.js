//conts querySelectors
const button = document.querySelector(".random-btn");
const colorHeader = document.querySelector(".color-header");
const body = document.querySelector(".background");

//* HEX RGB
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
// A, B, C, D, E, F

const hexRGB = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//events listeners
button.addEventListener("click", colorGenerator);

//functions
function colorGenerator() {
    let color = ["#"];
    for (let i = 0; i <= 5; i++) {
        let randomNum = Math.round(Math.random() * hexRGB.length - 1);
        let colorNum = hexRGB[randomNum];
        color.push(colorNum);
    }
    let generatedColor = color.join("");
    colorChanges(generatedColor);
}

function colorChanges(generatedColor) {
    colorHeader.innerText = generatedColor;
    body.style.backgroundColor = generatedColor;
}
