const form = document.querySelector("#loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const togglePassword = document.getElementById("toggle-password");


togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});


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
