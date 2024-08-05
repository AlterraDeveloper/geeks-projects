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

window.addEventListener("wheel", (event) => {
  if (event.deltaY < 0) {
    flashlightRadius += 10;
    flashlightRadius = Math.min(100, flashlightRadius);
  } else {
    flashlightRadius -= 10;
    flashlightRadius = Math.max(50, flashlightRadius);
  }
  $flashlight.style.boxShadow = `0px 0px 20px ${flashlightRadius}px rgba(255, 255, 255)`;
});
