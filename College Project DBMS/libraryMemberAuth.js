
// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form elements
    const signInButton = document.querySelector('.form-section button');
    const signUpButton = document.querySelector('.form-section:last-child .button');
    
    // Function to show alert messages
    function showAlert(message) {
        alert(message);
    }

    // Sign In button click event
    signInButton.addEventListener('click', function (event) {
        // Prevent default form submission
        event.preventDefault();

        // Get input values
        const rollNo = document.querySelector('.form-section input[placeholder="Roll No"]').value;
        const password = document.querySelector('.form-section input[placeholder="Password"]').value;

        // Simple validation
        if (!rollNo || !password) {
            showAlert('Please enter both Roll No and Password to sign in.');
        } else {
            // Placeholder for sign-in functionality (add API call or form submit here)
            showAlert('Signing in...'); 
        }
    });

    // Sign Up button click event
    signUpButton.addEventListener('click', function (event) {
        // Prevent default form submission
        event.preventDefault();

        // Get input values
        const name = document.querySelector('.form-section:last-child input[placeholder="Name"]').value;
        const email = document.querySelector('.form-section:last-child input[placeholder="Email"]').value;
        const password = document.querySelector('.form-section:last-child input[placeholder="Password"]').value;
        const phone = document.querySelector('.form-section:last-child input[placeholder="Phone Number"]').value;
        const rollNumber = document.querySelector('.form-section:last-child input[placeholder="Roll Number"]').value;
        const department = document.querySelector('.form-section:last-child select').value;

        // Validate all fields are filled
        if (!name || !email || !password || !phone || !rollNumber || !department) {
            showAlert('Please fill out all fields to sign up.');
            return;
        }

        // Validate email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            showAlert('Please enter a valid email address.');
            return;
        }

        // Validate password length
        if (password.length < 6) {
            showAlert('Password should be at least 6 characters long.');
            return;
        }

        // Placeholder for sign-up functionality (add API call or form submit here)
        showAlert('Signing up...');
    });
});
