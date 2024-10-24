const $qrCode = document.querySelector(".qr-box");
const $qrCodeText = document.querySelector(".word-wrap");
const $urlInput = document.querySelector("#url");
const $qrCodeColorInput = document.querySelector("#qrColor");
const $qrCodeBackgroundColorInput = document.querySelector("#qrBgColor");
const $qrCodeForm = document.querySelector("#root main form");
const $invertColors = document.querySelector("#invertColor");

const qrCodeOptions = {
  colorDark: "#ffffff",
  colorLight: "#2c7dfa",
  width: 250,
  height: 250,
};

$qrCodeColorInput.value = "#ffffff";
$qrCodeBackgroundColorInput.value = "#2c7dfa";
$urlInput.value = "";

function renderQrCode() {
  $qrCode.innerHTML = "";
  const qrCode = new QRCode($qrCode, qrCodeOptions);
  const url = $urlInput.value || defaultUrl;
  $qrCodeText.innerText = url;
  qrCode.makeCode(url, qrCodeOptions);
}

$urlInput.addEventListener("input", () => {
  renderQrCode();
});

$qrCodeColorInput.onchange = () => {
  qrCodeOptions.colorDark = $qrCodeColorInput.value;
  renderQrCode();
};

$qrCodeBackgroundColorInput.onchange = () => {
  const newColor = $qrCodeBackgroundColorInput.value;
  qrCodeOptions.colorLight = newColor;
  $qrCode.style.backgroundColor = newColor;
  renderQrCode();
};

$invertColors.onchange = () => {
  const { colorDark: qrColor, colorLight: qrBgColor } = { ...qrCodeOptions };
  qrCodeOptions.colorDark = qrBgColor;
  qrCodeOptions.colorLight = qrColor;
  $qrCodeColorInput.value = qrCodeOptions.colorDark;
  $qrCodeBackgroundColorInput.value = qrCodeOptions.colorLight;
  $qrCode.style.backgroundColor = qrCodeOptions.colorLight;
  renderQrCode();
};

$qrCodeForm.onsubmit = (event) => {
  event.preventDefault();
  var link = document.createElement("a");
  const qrCodeImage = $qrCode.querySelector("img");
  link.href = qrCodeImage.getAttribute("src");
  link.download = "MyQrCode.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
