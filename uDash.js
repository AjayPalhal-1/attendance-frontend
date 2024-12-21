document.addEventListener("DOMContentLoaded", async function () {
  const usernameDisplay = document.getElementById("username-display");
  const profileInfo = document.getElementById("profile-info");

<<<<<<< HEAD
    let isEditable = false; // Tracks whether fields are editable
    const role = localStorage.getItem("userRole") || "teacher"; // Fetch role, default to 'student'
=======
  // Extract query parameters from the URL
  const queryParams = new URLSearchParams(window.location.search);
  const userId = queryParams.get("userId"); // Get userId directly
  //   console.log("Extracted userId:", userId);
>>>>>>> 771cc6f148575e3c0e0f81251632efd435f3f40a

  if (!userId) {
    alert("No user data found. Redirecting to the login page.");
    window.location.href = "login.html";
    return;
  }

  try {
    const currentDate = new Date();

    // Format the date
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("en-GB", options);

    // Display the date
    document.getElementById(
      "currentDate"
    ).textContent = `Current system date: ${formattedDate}`;
    // Properly encode the userId to handle special characters like @
    const encodedUserId = encodeURIComponent(userId);
    // console.log("Encoded userId:", encodedUserId);
    const fetchUrl = `http://localhost:5000/profile?email=${encodedUserId}`;
    // console.log("Fetching URL:", fetchUrl);

    // Fetch user data from the server
    const response = await fetch(fetchUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }

    const userData = await response.json();

<<<<<<< HEAD
    // Enable editing when "Update Profile" is clicked
    updateProfileButton.addEventListener("click", function () {
        isEditable = !isEditable; // Toggle edit mode
        const inputs = profileInfoContainer.querySelectorAll("input, select");
        inputs.forEach(input => {
            if (input.id !== "username" &&  input.id !== "name") {
                input.readOnly = !isEditable;
                input.disabled = !isEditable;
            }
        });
=======
    // console.log(userData);
>>>>>>> 771cc6f148575e3c0e0f81251632efd435f3f40a

    if (userData.error) {
      throw new Error(userData.error);
    }

<<<<<<< HEAD
        if (!isEditable) {
            // Save the updated data
            const updatedProfile = {
                username: profilesData[role].username, // Username remains unchanged
                // name: document.getElementById("name").value,
                mobile: document.getElementById("mobile").value,
                dob: document.getElementById("dob").value,
                password: document.getElementById("password").value,
                gender: document.getElementById("gender").value,
            };
=======
    // Update the DOM with user data
    usernameDisplay.textContent = userData.name || "Unknown User";
>>>>>>> 771cc6f148575e3c0e0f81251632efd435f3f40a

    let formattedDOB = "N/A"; // Default value for DOB
    if (userData.Date_of_birth) {
      const dob = new Date(userData.Date_of_birth);
      const options = { day: "numeric", month: "short", year: "numeric" };
      formattedDOB = dob.toLocaleDateString("en-GB", options);
    }
    // console.log(userData);
    profileInfo.innerHTML = `
          <p><strong>Username:</strong> ${userData.email || "N/A"}</p>
          <p><strong>Full Name:</strong> ${userData.name || "N/A"}</p>
          <p><strong>Email:</strong> ${userData.email || "N/A"}</p>
          <p><strong>Contact No:</strong> ${userData.mob_No || "N/A"}</p>
          <p><strong>Roll No:</strong> ${userData.rollNo || "N/A"}</p>
          <p><strong>DOB :</strong> ${formattedDOB || "N/A"}</p>
        `;
  } catch (error) {
    console.error("Error fetching user data:", error);
    alert(
      "An error occurred while fetching user data. Redirecting to the login page."
    );
    window.location.href = "login.html";
  }

  // Logout functionality
  const logoutBtn = document.getElementById("logout-btn");
  logoutBtn.addEventListener("click", function () {
    window.location.href = "login.html";
  });
});
