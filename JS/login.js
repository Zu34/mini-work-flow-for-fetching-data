// login.js
import { apiService } from './apiService.js';

document.querySelector('.button').addEventListener('click', async () => {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (!username || !password) {
        alert('Please fill in both fields.');
        return;
    }

    const result = await apiService.login(username, password);
    if (result.success) {
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to the dashboard page
    } else {
        alert(result.message || 'Login failed. Please try again.');
    }
});
