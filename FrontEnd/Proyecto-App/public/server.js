const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000; // Use the same port as in your frontend code

// Middleware to parse JSON
app.use(bodyParser.json());

// Route to handle income data
app.post('/api/income', (req, res) => {
    const { amount } = req.body;

    // Here, you should save 'amount' to your database
    // For simplicity, let's log it to the console
    console.log('Received income amount:', amount);

    // Send a response (you can customize this based on your needs)
    res.status(200).json({ message: 'Income saved successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
