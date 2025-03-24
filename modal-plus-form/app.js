const modalContainer = document.querySelector("#modal_container");
const modal = modalContainer.querySelector(".modal");
const form = modal.querySelector("#form");
const modalOpen = document.querySelector("#open");

modalOpen.onclick = () => {
  modalContainer.classList.add("show");
};
modalContainer.onclick = () => {
  modalContainer.classList.remove("show");
};

modal.onclick = (event) => {
  event.stopPropagation();
};

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("submit form");
};
