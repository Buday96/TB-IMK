const container = document.querySelector(".container"),
  pwShowHide = document.querySelectorAll(".showHidePw"),
  pwFields = document.querySelectorAll(".password"),
  login = document.querySelector(".login-link"),
  loginForm = document.querySelector("#loginForm"), // Assuming you have a form with this ID
  errorMessage = document.querySelector(".error-message"); // Assuming there's a span/div for error messages

// js code to show/hide password and change icon
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";
        pwShowHide.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});

// js code for login validation
loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission for custom validation

  const emailField = document.querySelector("#email").value; // Assuming an input with ID 'email'
  const passwordField = document.querySelector("#password").value; // Assuming an input with ID 'password'

  // Hardcoded validation
  if (emailField === "admin" && passwordField === "admin") {
    window.location.href = "admin.html"; // Redirect to a new page
  } else {
    errorMessage.textContent = "Invalid email or password. Please try again."; // Display error message
  }
});
