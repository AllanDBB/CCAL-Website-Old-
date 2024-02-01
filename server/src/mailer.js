const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'no-reply@ccalajuela.ed.cr',
        pass: 'jocg jkkg hlce dkbb'
    }
});

// La función ahora recibe el token como argumento
function sendVerificationEmail(userEmail, token) {
    const mailOptions = {
        from: 'no-reply@ccalajuela.ed.cr',
        to: userEmail,
        subject: 'Verificación de Cuenta',
        text: 'Por favor, verifica tu cuenta haciendo clic en el siguiente enlace: ' +
              `http://localhost:3001/verify?token=${token}`
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