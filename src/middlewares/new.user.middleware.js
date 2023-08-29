const validator = require('validator');

const validateFieldsNewUser = (req, res, next) => {
    const { full_name, email, password } = req.body;
    if (!full_name) {
        return res.status(400).json({ message: 'Nome completo é um campo obrigatorio!' });
    }
    if (full_name.length < 6) {
        return res.status(400).json({ message: 'Nome completo precisa ter mínimo 6 caracteres!' });
    }
    if (!email) {
        return res.status(400).json({ message: 'E-mail é um campo obrigatorio!' });
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'E-mail inválido!' });
    }
    if (!password) {
        return res.status(400).json({ message: 'Password é um campo obrigatorio!' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password precisa ter no mínimo 6 caracteres!' });
    }
    next();
};

module.exports = {
    validateFieldsNewUser,
};