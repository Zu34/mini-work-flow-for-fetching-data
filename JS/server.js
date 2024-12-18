// server.js

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // For parsing application/json

// Example signup endpoint
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  // Simulate a successful signup response
  res.status(200).json({ success: true, message: 'Signup successful!' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
