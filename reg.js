document.addEventListener("DOMContentLoaded", function () {
  const roleSelect = document.getElementById("role");
  const studentFields = document.getElementById("studentFields");
  const teacherFields = document.getElementById("teacherFields");
  const experienceInput = document.getElementById("experience");

  roleSelect.addEventListener("change", function () {
    const selectedRole = roleSelect.value;

    // Hide all role-specific fields initially
    studentFields.classList.add("hidden");
    teacherFields.classList.add("hidden");

    // Disable the experience field if not relevant
    experienceInput.disabled = true;

    // Display fields based on role
    if (selectedRole === "student") {
      studentFields.classList.remove("hidden");
    } else if (selectedRole === "teacher") {
      teacherFields.classList.remove("hidden");
      experienceInput.disabled = false; // Enable the experience field for teachers
    }
  });

  // Trigger the change event when the page loads to set initial visibility
  roleSelect.dispatchEvent(new Event("change"));

  const registrationForm = document.getElementById("registrationForm");
  registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Check if the form is valid before submitting
    if (registrationForm.checkValidity()) {
      const formData = new FormData(registrationForm);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Send the registration data to the server
      fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            alert(`Error: ${(data, error)}`);
          } else {
            alert("Registration successful! Redirecting to login page...");
            window.location.href = "login.html";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("An error occurred. Please try again later.");
        });
    } else {
      alert("Please fill in all the required fields.");
    }
  });
});
