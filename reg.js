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
});
