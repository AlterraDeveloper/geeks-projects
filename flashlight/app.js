const $container = document.querySelector(".container");
const $flashlight = document.querySelector(".flashlight");

let flashlightRadius = 50;

$container.addEventListener("mousemove", (event) => {
  $flashlight.style.display = "block";
  $flashlight.style.top = event.offsetY + "px";
  $flashlight.style.left = event.offsetX + "px";
});

$container.addEventListener("mouseleave", () => {
  $flashlight.style.display = "none";
});

$container.addEventListener("wheel", (event) => {
  event.preventDefault();

  if (event.deltaY < 0) {
    flashlightRadius = Math.min(60, flashlightRadius + 10);
  } else {
    flashlightRadius = Math.max(30, flashlightRadius - 10);
  }
  $flashlight.style.boxShadow = `0px 0px 20px ${flashlightRadius}px white`;
  $flashlight.style.border = `${flashlightRadius}px solid white`;
  $flashlight.style.borderRadius = `${flashlightRadius}px`;
});
