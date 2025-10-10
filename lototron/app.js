const generateBtn = document.querySelector("#btn");
const lotoBox = document.querySelector(".loto-box");

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderBall(value) {
  const div = document.createElement("div");
  const colorClass = value % 2 === 0 ? "even" : "odd";
  div.classList.add("loto-ball", colorClass);
  div.textContent = value;
  return div;
}

generateBtn.onclick = () => {
  lotoBox.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const ballValue = getRandom(1, 99);
    const ball = renderBall(ballValue);
    lotoBox.append(ball);
  }
};

generateBtn.dispatchEvent(new Event("click"));