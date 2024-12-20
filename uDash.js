document.addEventListener("DOMContentLoaded", async function () {
  const usernameDisplay = document.getElementById("username-display");
  const profileInfo = document.getElementById("profile-info");

  // Extract query parameters from the URL
  const queryParams = new URLSearchParams(window.location.search);
  const userId = queryParams.get("userId"); // Get userId directly
  //   console.log("Extracted userId:", userId);

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

    // console.log(userData);

    if (userData.error) {
      throw new Error(userData.error);
    }

    // Update the DOM with user data
    usernameDisplay.textContent = userData.name || "Unknown User";

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
