const usersModel = require('../models/users.model');

const getAll = async (req, res) => {
    const users = await usersModel.findAll();
    return res.status(200).json(users);
};

const newUser = async (req, res) => {
    const { full_name, email, password } = req.body;
    const user = await usersModel.findByEmail(email);
    if (user) {
        return res.status(400).json({ message: 'E-mail já cadastrado!' });
    }
    if (await usersModel.createUser({ full_name, email, password })) {
        return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    }
    return res.status(500).json({ message: 'Erro do sistema!' });
};

module.exports = {
    getAll,
    newUser,
};