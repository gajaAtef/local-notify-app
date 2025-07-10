const express = require('express');
const app = express();
const port = 3000;

let messages = [];

app.use(express.json());

app.post('/notify', (req, res) => {
    messages.push(req.body.message);
    res.send({ status: "Notification sent" });
});

app.get('/messages', (req, res) => {
    res.send(messages);
    messages = [];
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});