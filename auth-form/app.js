// Select the form element
const form = document.querySelector("form");
const login = document.querySelector("#userEmail");
const password = document.querySelector("#userPassword");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!login.value || !password.value) {
    Swal.fire({
      title: "Error",
      text: "Login and Password required",
      icon: "error",
    });
    return;
  }

  if (login.value === "terminator3000" && password.value === "ARNOLD_123") {
    Swal.fire({
      title: "Success",
      text: "Welcome here",
      icon: "success",
    });
  } else {
    Swal.fire({
      title: "Error",
      text: "Invalid Login or Password. Try again",
      icon: "error",
    });
  }
});
