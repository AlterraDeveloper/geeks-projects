const counter = document.querySelector("#counter");
const decreaseButton = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");
const increaseButton = document.querySelector("#increase");

let counterValue = 0;

updateCounter();

function updateCounter() {
  counter.innerText = counterValue;
  if (counterValue > 0) {
    counter.style.color = "lightgreen";
  } else if (counterValue < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "cyan";
  }
}

decreaseButton.onclick = () => {
  counterValue--;
  updateCounter();
};

resetButton.onclick = () => {
  counterValue = 0;
  updateCounter();
};

increaseButton.onclick = () => {
  counterValue++;
  updateCounter();
};
