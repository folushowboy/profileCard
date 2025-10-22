
const form = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.getElementById("erroremailtext");
const message = document.getElementById("message");
const messageError = document.getElementById("errormsgtext");
const successMsg = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

message.addEventListener("input", (e) => {
  if (message.validity.valid) {
    messageError.textContent = "";
    messageError.className = "error";
  } else {
    showError();
  }
});

document.getElementById("submit").addEventListener("click", showError);

function showError() {
  if (email.validity.valid && message.validity.valid) {
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "Form submitted successfully!";

    form.reset();

    setTimeout(() => {
      successMsg.textContent = "";
    }, 1000);

    return;
  } else if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an e-mail address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Email must be valid (name@example.com).";
  } else if (message.validity.valueMissing) {
    messageError.textContent = "You need to enter a message.";
  } else if (message.validity.tooShort) {
    messageError.textContent = `Message should be at least ${message.minLength} characters; you entered ${message.value.length}.`;
  }

  // Show error message styling
  emailError.style.color = "#ff5252";
  messageError.style.color = "#ff5252";
}
