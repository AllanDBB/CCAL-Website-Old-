const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

function generateVerificationToken(email) {
    return jwt.sign(
        { email: email },
        "uaS#v}V%wl8'Hj7fwWEVYw'a&8Pzm!SQJ)-c6_dK9p5^-BQ!2E", 
        { expiresIn: '1h' } 
    );
}

let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'no-reply@ccalajuela.ed.cr',
        pass: 'QFME2hgS4%qY8bU*'
    }
});

function sendVerificationEmail(userEmail) {
    const token = generateVerificationToken(userEmail);
    const mailOptions = {
        from: 'no-reply@ccalajuela.ed.cr',
        to: userEmail,
        subject: 'Verificación de Cuenta',
        text: 'Por favor, verifica tu cuenta haciendo clic en el siguiente enlace: ' +
              `http://ccalajuela.ed.cr/verify?token=${token}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log('Error al enviar email:', error);
        } else {
            console.log('Email enviado:', info.response);
        }
    });
}

module.exports = sendVerificationEmail;
