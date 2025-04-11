document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const input = document.querySelector("input[type='email']");
  const errorMessage = document.createElement("p");

  // Add class for styling
  errorMessage.classList.add("error-message");
  errorMessage.style.display = "none";
  form.appendChild(errorMessage);

  form.addEventListener("submit", function (event) {
    errorMessage.style.display = "none";
    input.classList.remove("input-error");

    const emailValue = input.value.trim();

    if (emailValue === "") {
      errorMessage.textContent = "Error: The email field cannot be empty.";
      errorMessage.style.display = "block";
      input.classList.add("input-error"); //
      event.preventDefault();
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      errorMessage.textContent = "Error: Please enter a valid email address.";
      errorMessage.style.display = "block";
      input.classList.add("input-error");
      event.preventDefault();
    }
  });
});
