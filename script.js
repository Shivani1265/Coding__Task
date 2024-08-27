document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Reset error messages
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';

    let valid = true;

    // Email validation
    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email.';
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById('passwordError').innerText = 'Password must be at least 6 characters long.';
        document.getElementById('passwordError').style.display = 'block';
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
        // Here you would typically submit the form via AJAX or proceed with form submission
        // e.g., using fetch() or simply removing e.preventDefault() to allow normal form submission
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
