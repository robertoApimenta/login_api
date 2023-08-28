const express = require('express');
const app = express();

const usersController = require('../controllers/users.controller');
const loginController = require('../controllers/login.controller');

app.use(express.json());

app.get('/', (req_, res) => {
    res.json({ message: 'mensagem' });
});

app.get('/users', usersController.getAll);
app.post('/login', loginController.login);


module.exports = app;