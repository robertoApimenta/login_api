const express = require('express');
const app = express();

const usersController = require('../controllers/users.controller');
const loginController = require('../controllers/login.controller');

const { validateFields } = require('../middlewares/login.middleware');
const { validateFieldsNewUser } = require('../middlewares/new.user.middleware');

app.use(express.json());

app.get('/', (req_, res) => {
    res.json({ message: 'mensagem' });
});

app.get('/users', usersController.getAll);
app.post('/novo-usuario', validateFieldsNewUser, usersController.newUser);

app.post('/login', validateFields, loginController.login);
app.post('/forgot-password', loginController.forgotPassword);
app.get('/alterar-senha/:email_doido', loginController.changePassword);


module.exports = app;