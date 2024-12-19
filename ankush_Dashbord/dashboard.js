// document.addEventListener("DOMContentLoaded", function () {
//     // Retrieve the logged-in user's information from session storage
//     const username = sessionStorage.getItem('username');
    
//     if (username) {
//         document.getElementById("username-display").textContent = username;
//     } else {
//         // If no user is logged in, redirect them to login page
//         window.location.href = "login.html";
//     }

//     // Event listener for logout
//     document.getElementById("logout-btn").addEventListener("click", function () {
//         // Clear session storage (logout)
//         sessionStorage.removeItem('username');
//         alert("Logged out successfully");
//         window.location.href = "login.html";  // Redirect to login page
//     });
// });
