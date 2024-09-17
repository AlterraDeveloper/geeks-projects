const originalArray = [14, 74, 25, 10, 89, 45, 13, 7, 56];

const originalContainer = document.querySelector("#original .array");
const updatedContainer = document.querySelector("#updated .array");

function ArrayItem(value) {
  const div = document.createElement("div");
  div.className = "array-item";
  div.innerText = value;
  return div;
}

renderArray(originalArray, originalContainer);

function renderArray(array, container) {
  container.innerHTML = "";
  for (const item of array) {
    const arrayItem = ArrayItem(item);
    container.append(arrayItem);
  }
}

const actionButtons = document.querySelectorAll(".methods button");

actionButtons.forEach((button, i) => {
  switch (i) {
    case 0:
      button.onclick = () => {
        const newArray = originalArray.map((x) => x + 5);
        renderArray(newArray, updatedContainer);
      };
      break;
    case 1:
      button.onclick = () => {
        const newArray = originalArray.map((x) => x * 2);
        renderArray(newArray, updatedContainer);
      };
      break;
    case 2:
      button.onclick = () => {
        const newArray = originalArray.filter((x) => x > 50);
        renderArray(newArray, updatedContainer);
      };
      break;
    case 3:
      button.onclick = () => {
        const newArray = originalArray.filter((x) => x % 2 === 0);
        renderArray(newArray, updatedContainer);
      };
      break;
    case 4:
      button.onclick = () => {
        const newArray = originalArray.slice(0, 3);
        renderArray(newArray, updatedContainer);
      };
      break;
    case 5:
      button.onclick = () => {
        const newArray = originalArray.slice(-4);
        renderArray(newArray, updatedContainer);
      };
      break;
    case 6:
      button.onclick = () => {
        const newArray = [...originalArray].reverse();
        renderArray(newArray, updatedContainer);
      };
      break;
    case 7:
      button.onclick = () => {
        const newArray = [...originalArray].sort((a, b) => a - b);
        renderArray(newArray, updatedContainer);
      };
      break;
    case 8:
      button.onclick = () => {
        const newArray = [...originalArray].sort((a, b) => b - a);
        renderArray(newArray, updatedContainer);
      };
      break;
  }
});
