const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // Implement dashboard logic here
    res.send('Dashboard');
});

app.listen(3000, () => {
    console.log('Dashboard running on http://localhost:3000');
});