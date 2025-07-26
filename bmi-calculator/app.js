const $heightInput = document.querySelector("#height");
const $weightInput = document.querySelector("#weight");
const $result = document.querySelector("#bmi-result");
const $resultText = document.querySelector("#weight-condition");

function calculateBMI(height, weight) {
  height /= 100; // cm to m
  return (weight / height ** 2).toFixed(2);
}

function renderBMI() {
  const height = $heightInput.value;
  const weight = $weightInput.value;
  if (!height || !weight) {
    $result.value = "";
    $resultText.textContent = "";
    return;
  }
  const result = calculateBMI(height, weight);
  let resultText = "";
  let resultColor = "inherit";

  if (result < 16) {
    resultText = "Выраженный дефицит массы тела ";
    resultColor = "red";
  } else if (result < 19) {
    resultText = "Недостаточная (дефицит) масса тела ";
    resultColor = "orange";
  } else if (result < 25) {
    resultText = "Норма";
    resultColor = "lime";
  } else if (result < 30) {
    resultText = "Избыточная масса тела (предожирение)";
    resultColor = "yellow";
  } else if (result < 35) {
    resultText = "Ожирение 1 степени";
    resultColor = "orange";
  } else if (result < 40) {
    resultText = "Ожирение 2 степени";
    resultColor = "red";
  } else {
    resultText = "Ожирение 3 степени";
    resultColor = "darkred";
  }

  $result.value = result;
  $result.style.color = resultColor;
  $resultText.textContent = resultText;
}

$heightInput.addEventListener("input", renderBMI);
$weightInput.addEventListener("input", renderBMI);
