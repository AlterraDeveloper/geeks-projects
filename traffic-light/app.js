

const $redBtn = document.querySelector("#red");
const $yellowBtn = document.querySelector("#yellow");
const $greenBtn = document.querySelector("#green");

const $action = document.querySelector(".action");

const defaultColor = "#444";

$redBtn.onclick = () => {
    $redBtn.style.backgroundColor = "red";
    $yellowBtn.style.backgroundColor = defaultColor;
    $greenBtn.style.backgroundColor = defaultColor;
    
    $action.textContent = "stop";
    $action.style.color = "red";
}

$yellowBtn.onclick = () => {
    $redBtn.style.backgroundColor = defaultColor;
    $yellowBtn.style.backgroundColor = "#d9d907";
    $greenBtn.style.backgroundColor = defaultColor;
    
    $action.textContent = "wait";
    $action.style.color = "#d9d907";
}

$greenBtn.onclick = () => {
    $redBtn.style.backgroundColor = defaultColor;
    $yellowBtn.style.backgroundColor = defaultColor;
    $greenBtn.style.backgroundColor = "#07a607";
    
    $action.textContent = "go";
    $action.style.color = "#07a607";
}

