const defaultColor = "#1d1d1d";
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SizeS = 160;
const SizeM = 300;
const SizeL = 500;


const container = document.querySelector("#container");

const createSquare = () => {
  const div = document.createElement("div");
  div.classList.add("square");
  return div;
};

const getRandomColor = () => {
  return colors[Math.round(Math.random() * colors.length)];
};

function renderBoard(count) {
  container.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const square = createSquare();

    square.addEventListener("mouseover", () => {
      const color = getRandomColor();
      square.style.backgroundColor = color;
      square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    });

    square.addEventListener("mouseleave", () => {
      square.style.backgroundColor = defaultColor;
      square.style.boxShadow = `0 0 2px #000`;
    });

    container.appendChild(square);
  }
}

const radioButtons = document.querySelectorAll(".panel input[type=radio]");
for (const sizeBtn of radioButtons) {
  sizeBtn.onchange = () => {
    switch (sizeBtn.value) {
      case "S":
        renderBoard(SizeS);
        break;
      case "M":
        renderBoard(SizeM);
        break;
      case "L":
        renderBoard(SizeL);
        break;
    }
  };
}

renderBoard(SizeS);
