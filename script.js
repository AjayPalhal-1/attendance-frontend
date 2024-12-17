document.getElementById('role').addEventListener('change', function () {
    const role = this.value;
    const studentFields = document.getElementById('studentFields');
  
    // Show or hide fields based on the selected role
    if (role === 'student') {
      studentFields.classList.remove('hidden');
    } else {
      studentFields.classList.add('hidden');
    }
  });
  
  document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted successfully!');
  });
  