const usersModel = require('../models/users.model');

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await usersModel.findByEmailAndPassword({ email, password });
    if (!user) {
        return res.status(400).json({ message: 'E-mail ou senha incorretos!' })
    }
    return res.status(200).json({ message: 'Login realizado com sucesso!' })
};

module.exports = {
    login,
};