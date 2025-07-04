const leftCircle = document.querySelector("#left");
const rightCircle = document.querySelector("#right");

const leftRed = document.querySelector("#left-red");
const leftYellow = document.querySelector("#left-yellow");
const leftGreen = document.querySelector("#left-green");

const rightmagenta = document.querySelector("#right-magenta");
const rightYellow = document.querySelector("#right-yellow");
const rightcyan = document.querySelector("#right-cyan");

leftRed.onclick = () => {
  leftCircle.style.backgroundColor = "red";
};
leftYellow.onclick = () => {
  leftCircle.style.backgroundColor = "yellow";
};
leftGreen.onclick = () => {
  leftCircle.style.backgroundColor = "green";
};

rightmagenta.onclick = () => {
  rightCircle.style.backgroundColor = "magenta";
};
rightYellow.onclick = () => {
  rightCircle.style.backgroundColor = "yellow";
};
rightcyan.onclick = () => {
  rightCircle.style.backgroundColor = "cyan";
};
