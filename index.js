const express = require('express');
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());
const cors = require('cors');

app.use(cors()); // Add this line before your routes


app.get('/test', (req, res) => {
    res.send('Backend is running!');
});


app.post('/uppercase', (req, res) => {
    const inputData = req.body.data;
    console.log(inputData)
    const upperCaseData = inputData.toUpperCase();
    console.log(upperCaseData)
    res.json({ data: upperCaseData });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});