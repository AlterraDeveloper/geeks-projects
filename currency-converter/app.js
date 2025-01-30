document.getElementById("output").style.visibility = "hidden";
document.getElementById("kgsInput").addEventListener("input", function (e) {
  let kgs = e.target.value;
  if (kgs === "") {
    document.getElementById("output").style.visibility = "hidden";
    return;
  } else {
    document.getElementById("output").style.visibility = "visible";
  }

  const usdFilter = document.querySelector("#usdFilter");
  const eurFilter = document.querySelector("#eurFilter");
  const cnyFilter = document.querySelector("#cnyFilter");

  const usdBlock = document.querySelector("#usdBlock");
  const eurBlock = document.querySelector("#eurBlock");
  const cnyBlock = document.querySelector("#cnyBlock");

  usdBlock.style.display = usdFilter.checked ? "block" : "none";
  eurBlock.style.display = eurFilter.checked ? "block" : "none";
  cnyBlock.style.display = cnyFilter.checked ? "block" : "none";

  document.getElementById("usdOutput").textContent = roundWithPrecision(
    kgs / 87,
    2
  );
  document.getElementById("eurOutput").textContent = roundWithPrecision(
    kgs / 92,
    2
  );
  document.getElementById("cnyOutput").textContent = roundWithPrecision(
    kgs / 10,
    2
  );
});

function roundWithPrecision(number, precision) {
  const powerOfTen = 10 ** precision;
  return Math.round(number * powerOfTen) / powerOfTen;
}
