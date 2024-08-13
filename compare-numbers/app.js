document.addEventListener("DOMContentLoaded", (event) => {
  console.log(`Event ${event}`, event);

  const button = document.querySelector("button");
  const [numberLeft, numberRight] = [
    ...document.querySelectorAll(".container input"),
  ];
  const compareResult = document.querySelector(".compare");

  console.log(`innerText = "${compareResult.innerText}"`);
  console.log(`textContent = "${compareResult.textContent}"`);
  console.log(`innerHTML = "${compareResult.innerHTML}"`);
  console.log(`value = "${compareResult.value}"`);

  button.onclick = () => {
    let result = "";
    const numL = Number(numberLeft.value);
    const numR = Number(numberRight.value);

    if (isNaN(numL) || isNaN(numR)) {
      result = `<span class="red"> ? </span>`;
    } else if (numL > numR) {
      result = `<span class="orange"> > </span>`;
    } else if (numL < numR) {
      result = `<span class="yellow"> < </span>`;
    } else {
      result = `<span class="green"> = </span>`;
    }

    compareResult.innerHTML = result;
  };
});
