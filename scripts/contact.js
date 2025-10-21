// alert("connected")

const form = document.querySelector("form");
const email = document.getElementById("email");
const message = document.getElementById("message");
const errorMsg = document.getElementById("error-message");
const errorEmail = document.getElementById("error-email");
const successMsg = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  showError();
});

email.addEventListener("input", (e) => {
  if (email.validity.valid) {
    // If the email is valid (matches name@example.com)
    errorEmail.textContent = "";
    errorEmail.className = "error";
  } else {
    // If the email is invalid or empty
    showError();
  }
});
message.addEventListener("input", (e) => {
  if (message.validity.valid) {
    // If the email is valid (matches name@example.com)
    errorMsg.textContent = "";
    errorMsg.className = "error";
  } else {
    // If the email is invalid or empty
    showError();
  }
});

document.getElementById("submit").addEventListener("click", showError);

function showError() {
  if (message.validity.valid) {
    errorMsg.textContent = "";
    errorMsg.className = "error";
    successMsg.textContent = "Successfully Submitted!";
    return;
  } else if (email.validity.valueMissing) {
    errorMsg.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    errorMsg.textContent = "Email must be valid (name@example.com).";
  } else if (message.validity.valueMissing) {
    errorMsg.textContent = `You need to enter a message (Message should be at least ${message.minLength} characters; you entered ${message.value.length}).`;
    return;
  }

  // Show error message styling
  errorMsg.className = "error active";
  errorEmail.style.color = "red";
  errorMsg.style.color = "red";
}

function clearMsg() {
  document.querySelector("form").reset();
  successMsg.textContent = "";
}
