
const BASE_URL = 'http://localhost:3000';  // Local server URL for testing

export const apiService = {
    signup: async (name, email, password) => {
        try {
            // This is the mock API endpoint for testing signup.
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name, email, password
                }),
            });

            // Mock response. In a real scenario, the server will return a success message or user data.
            const data = await response.json();

            // Mock response handling: success response simulation
            return {
                success: true,
                message: 'Signup successful!',
                data
            };
        } catch (error) {
            console.error('Signup Error:', error);
            return { success: false, message: 'Something went wrong' };
        }
    },
};
