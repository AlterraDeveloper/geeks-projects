

const codeInputs = document.querySelectorAll(".otp-letter-input");
const refreshBtn = document.querySelector("#refresh-btn");

function refreshOtp(){
    codeInputs.forEach(input => {
        input.value = Math.floor(Math.random() * 9);
    })
}

refreshOtp();

refreshBtn.onclick = refreshOtp;