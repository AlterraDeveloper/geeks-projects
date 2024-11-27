document.getElementById("output").style.visibility = "hidden";
document.getElementById("kgsInput").addEventListener("input", function (e) {
  let kgs = e.target.value;
  if (kgs === "") {
    document.getElementById("output").style.visibility = "hidden";
    return;
  }

  document.getElementById("output").style.visibility = "visible";
  document.getElementById("usdOutput").innerHTML = roundWithPrecision(
    kgs / 87,
    2
  );
  document.getElementById("eurOutput").innerHTML = roundWithPrecision(
    kgs / 92,
    2
  );
  document.getElementById("cnyOutput").innerHTML = roundWithPrecision(
    kgs / 10,
    2
  );
});

function roundWithPrecision(number, precision) {
  const powerOfTen = 10 ** precision;
  return Math.round(number * powerOfTen) / powerOfTen;
}
