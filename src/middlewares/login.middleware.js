const validator = require('validator');

const validateFields = (req, res, next) => {
    const { email, password } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'E-mail é um campo obrigatorio' });
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'E-mail inválido' });
    }
    if (!password) {
        return res.status(400).json({ message: 'Password é um campo obrigatorio' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password precisa ter no mínimo 6 caracteres' });
    }
    next();
};

module.exports = {
    validateFields,
};