const $container = document.querySelector(".container");
const $flashlight = document.querySelector(".flashlight");

const isFirefox = navigator.userAgent.toLowerCase().includes("firefox");

let flashlightRadius = 50;

$container.addEventListener("mousemove", (event) => {
  $flashlight.style.display = "block";
  $flashlight.style.top = event.offsetY + "px";
  $flashlight.style.left = event.offsetX + "px";

  if (!isFirefox)
    $flashlight.style.border = `${flashlightRadius}px solid white`;
});

$container.addEventListener("mouseleave", () => {
  $flashlight.style.display = "none";
});

$container.addEventListener("wheel", (event) => {
  event.preventDefault();

  if (event.deltaY < 0) {
    flashlightRadius = Math.min(90, flashlightRadius + 10);
  } else {
    flashlightRadius = Math.max(50, flashlightRadius - 10);
  }
  $flashlight.style.boxShadow = `0px 0px 20px ${flashlightRadius}px white`;
  $flashlight.style.borderRadius = `${flashlightRadius}px`;

  if (!isFirefox)
    $flashlight.style.border = `${flashlightRadius}px solid white`;
});
