const connection = require('./connection');

const findAll = async () => {
    const [result] = await connection.execute('SELECT * FROM users');
    return result;
};

const findByEmailAndPassword = async ({ email, password }) => {
    const [result] = await connection.execute(`SELECT * FROM users WHERE email = ? AND password = ?`, [email, password]);
    return result[0];
};

module.exports = {
    findAll,
    findByEmailAndPassword,
};