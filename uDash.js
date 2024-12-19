document.addEventListener("DOMContentLoaded", function () {
    // Dummy records
    const profilesData = {
        student: {
            username: "student@example.com",
            name: "Amol Pawar",
            mobile: "9876543210",
            dob: "2004-07-15",
            password: "student123",
            gender: "male",
            attendance: 24,
        },
        teacher: {
            username: "teacher@example.com",
            name: "Ajay  Palhal",
            mobile: "9123456789",
            dob: "1985-03-22",
            password: "teacher123",
            gender: "female",
            subject: "Physics",
            experience: 12,
        },
        admin: {
            username: "admin@example.com",
            name: "Ankush Pawar",
            mobile: "9812345678",
            dob: "1975-12-01",
            password: "admin123",
            gender: "male",
        },
    };

    let isEditable = false; // Tracks whether fields are editable
    const role = localStorage.getItem("userRole") || "admin"; // Fetch role, default to 'student'

    const profileInfoContainer = document.getElementById("profile-info");
    const updateProfileButton = document.getElementById("update-profile-btn");

    // Render profile data based on role
    function renderProfile(data) {
        const commonFields = `
            <p><strong>Username (Email):</strong> <span id="username">${data.username}</span></p>
            <p><strong>Name:</strong> <input type="text" id="name" value="${data.name}" readonly></p>
            <p><strong>Mobile Number:</strong> <input type="text" id="mobile" value="${data.mobile}" readonly></p>
            <p><strong>Date of Birth:</strong> <input type="date" id="dob" value="${data.dob}" readonly></p>
            <p><strong>Password:</strong> <input type="password" id="password" value="${data.password}" readonly></p>
            <p><strong>Gender:</strong> 
                <select id="gender" disabled>
                    <option value="male" ${data.gender === "male" ? "selected" : ""}>Male</option>
                    <option value="female" ${data.gender === "female" ? "selected" : ""}>Female</option>
                    <option value="other" ${data.gender === "other" ? "selected" : ""}>Other</option>
                </select>
            </p>`;

        let roleSpecificFields = "";
        if (role === "student") {
            roleSpecificFields = `<p><strong>Total Attendance Count (This Month):</strong> <span id="attendance">${data.attendance}</span></p>`;
        } else if (role === "teacher") {
            roleSpecificFields = `
                <p><strong>Subject:</strong> <input type="text" id="subject" value="${data.subject}" readonly></p>
                <p><strong>Experience (Years):</strong> <input type="number" id="experience" value="${data.experience}" readonly></p>`;
        }

        profileInfoContainer.innerHTML = commonFields + roleSpecificFields;
    }

    // Initialize profile based on role
    renderProfile(profilesData[role]);

    // Enable editing when "Update Profile" is clicked
    updateProfileButton.addEventListener("click", function () {
        isEditable = !isEditable; // Toggle edit mode
        const inputs = profileInfoContainer.querySelectorAll("input, select");
        inputs.forEach(input => {
            if (input.id !== "username") {
                input.readOnly = !isEditable;
                input.disabled = !isEditable;
            }
        });

        updateProfileButton.textContent = isEditable ? "Save Changes" : "Update Profile";

        if (!isEditable) {
            // Save the updated data
            const updatedProfile = {
                username: profilesData[role].username, // Username remains unchanged
                name: document.getElementById("name").value,
                mobile: document.getElementById("mobile").value,
                dob: document.getElementById("dob").value,
                password: document.getElementById("password").value,
                gender: document.getElementById("gender").value,
            };

            // Add role-specific data
            if (role === "student") {
                updatedProfile.attendance = document.getElementById("attendance").textContent;
            } else if (role === "teacher") {
                updatedProfile.subject = document.getElementById("subject").value;
                updatedProfile.experience = document.getElementById("experience").value;
            }

            // Save updated data to profilesData (simulate saving to a database)
            profilesData[role] = updatedProfile;

            console.log("Profile updated:", profilesData[role]);
        }
    });
});
