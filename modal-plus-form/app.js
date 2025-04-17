const openModalBtn = document.querySelector("#open");
const modalContainer = document.querySelector(".modal-container");
const closeModalBtn = document.querySelector("#modal-close");
const modal = modalContainer.querySelector(".modal");

openModalBtn.onclick = () => {
  openModal();
};

closeModalBtn.onclick = () => {
  closeModal();
};

modalContainer.onclick = () => {
  closeModal();
};

modal.onclick = (event) => {
  event.stopPropagation();
};

function openModal() {
  modalContainer.classList.add("show");
}

function closeModal() {
  modalContainer.classList.remove("show");
}

// event propagation - распространение события

const form = document.querySelector("#form");

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("form submitted");
};

// form.addEventListener("submit", () => {});

const passwordEye = document.getElementById("password-eye");

passwordEye.onmouseenter = () => {
  const passwordInput = passwordEye.parentNode.querySelector(
    "input[type=password]"
  );
  passwordInput.setAttribute("type", "text");
};

passwordEye.onmouseleave = () => {
  const passwordInput = passwordEye.parentNode.querySelector(
    "input[type=text]"
  );
  passwordInput.setAttribute("type", "password");
};