let resultDiv = document.querySelector(".resultDiv");
let first_color = document.querySelector("#first_color");
let second_color = document.querySelector("#second_color");
let output_h2 = document.querySelector("#output_h2");

function generatedGradient(){
    resultDiv.style.background = "linear-gradient(to right bottom, " + first_color.value + ", " + second_color.value + ")";

    output_h2.innerText = resultDiv.style.background + ";";
}

first_color.addEventListener("input", generatedGradient)

second_color.addEventListener("input", generatedGradient)
