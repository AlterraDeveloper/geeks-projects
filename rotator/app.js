

const antiClockwiseBtn = document.querySelector("#anti-clockwise");
const refreshBtn = document.querySelector("#refresh");
const clockwiseBtn = document.querySelector("#clockwise");
const shape = document.querySelector("#shape");

antiClockwiseBtn.onclick = () => {
    let currentTransform = shape.style.transform || 'rotate(0deg)';


    let degrees = Number(currentTransform
        .replace("rotate", '')
        .replace("deg", '')
        .replace("(", '')
        .replace(")", ''));
    degrees -= 90;
    shape.style.transform = `rotate(${degrees}deg)`;

    if (degrees % 360 === 0) {
        shape.style.boxShadow = 'inset 0 0 15px 5px lime';
    } else {
        shape.style.boxShadow = 'inset 0 0 15px 5px red';
    }

}

refreshBtn.onclick = () => {
    shape.textContent = String.fromCharCode(65 + Math.round(Math.random() * 25));
}

clockwiseBtn.onclick = () => {
    const currentTransform = shape.style.transform || 'rotate(0deg)';

    let degrees = Number(currentTransform
        .replace("rotate", '')
        .replace("deg", '')
        .replace("(", '')
        .replace(")", ''));
    degrees += 90;
    shape.style.transform = `rotate(${degrees}deg)`;
    if (degrees % 360 === 0) {
        shape.style.boxShadow = 'inset 0 0 15px 5px lime';
    } else {
        shape.style.boxShadow = 'inset 0 0 15px 5px red';
    }
}