const usersModel = require('../models/users.model');

const getAll = async (req, res) => {
    const users = await usersModel.findAll();
    return res.status(200).json(users);
};

module.exports = {
    getAll,
};