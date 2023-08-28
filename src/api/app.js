const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req_, res) => {
    res.json({ message: 'mensagem' });
});

module.exports = app;