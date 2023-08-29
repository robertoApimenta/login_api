const connection = require('./connection');

const findAll = async () => {
    const [result] = await connection.execute('SELECT * FROM users');
    return result;
};

const findByEmail = async (email) => {
    const [result] = await connection.execute(`SELECT * FROM users WHERE email = ? `, [email]);
    return result[0];
};

const findByEmailAndPassword = async ({ email, password }) => {
    const [result] = await connection.execute(`SELECT * FROM users WHERE email = ? AND password = ?`, [email, password]);
    return result;
};

const createUser = async ({ full_name, email, password }) => {
    try {
        await connection.execute('INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)', [full_name, email, password]);
        return true;
    } catch (err) {
        return err;
    }
};

module.exports = {
    findAll,
    findByEmailAndPassword,
    findByEmail,
    createUser,
};