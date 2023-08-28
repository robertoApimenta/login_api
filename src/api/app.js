const express = require('express');
const app = express();

const usersController = require('../controllers/users.controller');
const loginController = require('../controllers/login.controller');

const { validateFields } = require('../middlewares/login.middleware');

app.use(express.json());

app.get('/', (req_, res) => {
    res.json({ message: 'mensagem' });
});

app.get('/users', usersController.getAll);
app.post('/login', validateFields, loginController.login);


module.exports = app;