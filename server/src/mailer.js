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

function sendMail(userName, userEmail, userMessage) {
    const mailOptions = {
        from: 'no-reply@ccalajuela.ed.cr',
        to: 'adbyb.es@gmail.com',
        subject: `Consulta de ${userName}`,
        html: `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #ccc; border-radius: 8px; background-color: #f9f9f9;">
                <h2 style="color: #007BFF; text-align: center;">Nueva Consulta de Contacto</h2>
                <div style="padding: 20px; background-color: white; border-radius: 8px;">
                    <p style="color: #333; font-size: 16px;"><strong>De:</strong> ${userName} (${userEmail})</p>
                    <p style="color: #333; font-size: 16px;"><strong>Mensaje:</strong></p>
                    <p style="color: #555; font-size: 16px; margin-bottom: 20px; border-left: 4px solid #007BFF; padding-left: 8px;">${userMessage}</p>
                    <a href="mailto:${userEmail}" style="display: inline-block; background-color: #007BFF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Responder a ${userName}</a>
                </div>
                <footer style="margin-top: 20px; text-align: center; color: #777; font-size: 12px;">
                    <p>Este correo electrónico fue generado automáticamente. Por favor, no responda directamente a este mensaje.</p>
                </footer>
            </div>
        `,
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('Error al enviar email:', error);
        } else {
            console.log('Email enviado:', info.response);
        }
    });
}


module.exports = {sendMail, sendVerificationEmail};