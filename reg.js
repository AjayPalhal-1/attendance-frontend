document.addEventListener('DOMContentLoaded', function () {
  const roleSelect = document.getElementById('role');
  const studentFields = document.getElementById('studentFields');
  const teacherFields = document.getElementById('teacherFields');

  roleSelect.addEventListener('change', function () {
    const selectedRole = roleSelect.value;

    // Hide all role-specific fields initially
    studentFields.classList.add('hidden');
    teacherFields.classList.add('hidden');

    // Display fields based on role
    if (selectedRole === 'student') {
      studentFields.classList.remove('hidden');
    } else if (selectedRole === 'teacher') {
      teacherFields.classList.remove('hidden');
    }
  });

  const registrationForm = document.getElementById('registrationForm');
  registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate successful registration
    alert('Registration successful! Redirecting to login page...');
    
    // Redirect to login page after registration
    window.location.href = 'login.html';
  });
});
