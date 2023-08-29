const nodemailer = require('nodemailer');
require('dotenv').config();

const { createToken } = require('../utils/token');

// Configuração do transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'roberto.uft@gmail.com',
        pass: process.env.GMAIL_PASS,
    }
});


///////////////////////////////////////////////////////////////////

const sendEmailForgotPassword = (email) => {
    const email_doido = createToken(email);
    const text = `http://localhost:3000/alterar-senha/${email_doido}`;
    const emailOptions = {
        from: 'roberto.uftl@gmail.com',
        to: email,
        subject: 'Alteração de senha',
        text,
    };
    transporter.sendMail(emailOptions, (error, info) => {
        if (error) {
            console.log('Erro ao enviar o email:', error);
        } else {
            console.log('Email enviado:', info.response);
        }
    });
};

module.exports = {
    sendEmailForgotPassword,
};
