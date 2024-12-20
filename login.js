document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const usernameError = document.getElementById("username-error");
  const passwordError = document.getElementById("password-error");
  const togglePassword = document.getElementById("toggle-password");
  const rememberMe = document.getElementById("remember-me");


    // Toggle password visibility
    togglePassword.addEventListener("click", function () {
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
      togglePassword.textContent = type === "password" ? "👁" : "🙈";
    });
  
    // Handle form submission
    loginForm.addEventListener("submit", async function (e) {
      e.preventDefault();
  
      // Clear previous errors
      usernameError.textContent = "";
      passwordError.textContent = "";
  
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      // Input validation
      if (!username) {
        usernameError.textContent = "Username is required";
        return;
      }
      if (!password) {
        passwordError.textContent = "Password is required";
        return;
      }
  
      // Prepare the data for the POST request
      const loginData = {
        userId: username,
        password: password,
      };
     
      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Redirect to the dashboard page with user data passed via URL
          const queryParams = new URLSearchParams(data.user).toString();
          window.location.href = `uDash.html?${queryParams}`;
        } else {
          // Display error messages from the response
          if (data.error) {
            passwordError.textContent = data.error;
          } else {
            alert("Login failed. Please try again.");
          }
        }
      } catch (error) {
        console.error("Error during login:", error);
        alert("An error occurred. Please try again.");
      }
    });
  });
  



