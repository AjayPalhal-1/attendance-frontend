const form = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const forgotPasswordLink = document.getElementById("forgot-password-link");
const forgotPasswordModal = document.getElementById("forgot-password-modal");
const closeModalBtn = document.getElementById("close-modal");
const togglePassword = document.getElementById("toggle-password");

// Password Visibility Toggle
togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});

// Form Validation
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    if (usernameInput.value.trim() === "") {
        usernameError.textContent = "Username can't be blank";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    if (passwordInput.value.trim() === "") {
        passwordError.textContent = "Password can't be blank";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    if (isValid) {
        alert("Login Successful!");
    }
});

// Forgot Password Modal
forgotPasswordLink.addEventListener("click", (e) => {
    e.preventDefault();
    forgotPasswordModal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
    forgotPasswordModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === forgotPasswordModal) {
        forgotPasswordModal.style.display = "none";
    }
});
