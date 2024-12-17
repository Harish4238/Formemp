document.getElementById('employeeForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const role = document.getElementById('role').value;

    // Error divs
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const ageError = document.getElementById('ageError');
    const phoneError = document.getElementById('phoneError');
    const roleError = document.getElementById('roleError');
    const successMessage = document.getElementById('successMessage');

    // Clear errors
    nameError.textContent = '';
    emailError.textContent = '';
    ageError.textContent = '';
    phoneError.textContent = '';
    roleError.textContent = '';
    successMessage.textContent = '';

    // Validate inputs
    let isValid = true;

    if (name === '' || name.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters long.';
        isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email format.';
        isValid = false;
    }

    if (age === '' || isNaN(age) || age < 18 || age > 65) {
        ageError.textContent = 'Age must be between 18 and 65.';
        isValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        phoneError.textContent = 'Phone must be a 10-digit number.';
        isValid = false;
    }

    if (role === '') {
        roleError.textContent = 'Please select a role.';
        isValid = false;
    }

    // If all fields are valid, show success message
    if (isValid) {
        successMessage.textContent = 'Employee added successfully!';
        console.log({
            name,
            email,
            age,
            phone,
            role
        });

        // Clear form
        document.getElementById('employeeForm').reset();
    }
});
