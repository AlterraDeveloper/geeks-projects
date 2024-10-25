

const leftSide = document.querySelector(".left")
const rightSide = document.querySelector(".right")
const $leftInput = leftSide.querySelector("input");
const $rightInput = rightSide.querySelector("input");

$leftInput.value = "#ffffff";
$rightInput.value = "#ffffff";

$leftInput.onchange = () => {
    rightSide.style.backgroundColor = $leftInput.value;
}

$rightInput.onchange = () => {
    leftSide.style.backgroundColor = $rightInput.value;
}