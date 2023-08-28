const jwt = require('jsonwebtoken');

const private_key = 'chave_privada';

const createToken = (email) => {
    const token = jwt.sign({ email }, private_key, { expiresIn: '24h' });
    return token;
};

const decodedToken = (token) => {
    const decoded = jwt.verify(token, private_key);
    return decoded;
};

module.exports = {
    createToken,
    decodedToken,
};