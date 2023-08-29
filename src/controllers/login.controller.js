const usersModel = require('../models/users.model');

const { createToken, decodedToken } = require('../utils/token');
const { sendEmailForgotPassword } = require('../utils/sendForgotPassword');

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await usersModel.findByEmailAndPassword({ email, password });
    if (!user) {
        return res.status(400).json({ message: 'E-mail ou senha incorretos!' })
    }
    const token = createToken(email);
    return res.status(200).json({ token, message: 'Login realizado com sucesso!' })
};

const forgotPassword = async (req, res) => {
    const { email } = req.body;
    const user = await usersModel.findByEmail(email);
    if (!user) {
        return res.status(400).json({ message: 'E-mail não cadastrado!' });
    }
    sendEmailForgotPassword(email);
}

const changePassword = async (req, res) => {
    const { email_doido } = req.params;
    try {
        const { email } = decodedToken(email_doido);
        console.log(email)
    } catch (err) {
        return res.status(400).json({ message: 'Link inválido' });
    }

}

module.exports = {
    login,
    forgotPassword,
    changePassword,
};