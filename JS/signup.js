import { apiService } from '../JS/apiService.js';
 
document.addEventListener('DOMContentLoaded', () => {
  const signupButton = document.getElementById('signup-button');

  if (signupButton) {
    signupButton.addEventListener('click', async (e) => {
      e.preventDefault();  // Prevent form submission

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const confirmPassword = document.getElementById('confirm-password').value.trim();

      // Error message containers
      const errorMessages = {
        name: document.getElementById('name-error'),
        email: document.getElementById('email-error'),
        password: document.getElementById('password-error'),
        confirmPassword: document.getElementById('confirm-password-error')
      };

      let isValid = true;

      // Name validation
      if (name === "") {
        errorMessages.name.textContent = "Name is required.";
        isValid = false;
      } else {
        errorMessages.name.textContent = "";
      }

      // Email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errorMessages.email.textContent = "Please enter a valid email address.";
        isValid = false;
      } else {
        errorMessages.email.textContent = "";
      }

      // Password validation
      if (password.length < 6) {
        errorMessages.password.textContent = "Password must be at least 6 characters.";
        isValid = false;
      } else {
        errorMessages.password.textContent = "";
      }

      // Confirm password validation
      if (password !== confirmPassword) {
        errorMessages.confirmPassword.textContent = "Passwords do not match.";
        isValid = false;
      } else {
        errorMessages.confirmPassword.textContent = "";
      }

      // Stop and show errors if not valid
      if (!isValid) {
        return;
      }

      // If form is valid, proceed with the signup API call
      try {
        console.log('Sending data:', { name, email, password });
        const response = await apiService.signup(name, email, password);

        if (response.success) {
          alert('Signup successful! Redirecting to login...');
          window.location.href = 'login.html';
        } 

        else {
          alert('Error: ' + (response.message || 'Signup failed.'));
        }
      } catch (error) {
        console.error('Error during signup:', error);
        alert('Something went wrong. Please try again.');
      }
    });
  } else {
    console.error('Signup button not found!');
  }
});
