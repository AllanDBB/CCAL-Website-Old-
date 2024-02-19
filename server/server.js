const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const connectDB = require('./src/database');
const uploadHome = require('./src/uploadHome');
const uploadAchievements = require('./src/uploadAchievements');
const User = require('./src/models/user'); 
const app = express();
const port = process.env.PORT || 3001;
const cors = require('cors');
const { sendMail, sendVerificationEmail } = require('./src/mailer');
// Connect database.
connectDB();

// using cors.
app.use(cors());
// Middlewares.
app.use(bodyParser.json());

// Token
const JWT_token = "uaS#v}V%wl8'Hj7fwWEVYw'a&8Pzm!SQJ)-c6_dK9p5^-BQ!2E";

function parseJwt (token) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

function verifyToken(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, JWT_token);
        req.usuario = decoded;
        next();
    } catch (error) {
        return res.status(401).send('Token inválido');
    }
}


// Testing route.
app.get('/', (req, res) => {
    res.send('Prueba pasada.');
});

// Route to upload to home banner files.
app.post('/uploadHome', uploadHome.single('file'), (req, res) => {
    console.log('uploadPath:', req.body.uploadPath);
    res.send('Archivo subido con éxito!');
});

// Route to upload to achievements banner files.
app.post('/uploadAchievements', uploadAchievements.single('file'), (req, res) => {
    console.log('uploadPath:', req.body.uploadPath);
    res.send('Archivo subido con éxito!');
});

// Ruta de registro

app.post('/register', async (req, res) => {
    try {
        const { username, lastnames, email, password, confirmPassword } = req.body;
        
        if (password !== confirmPassword) {
            return res.status(400).send('Las contraseñas no coinciden');
        }
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('El email ya está registrado');
        }
        
        // Generar token de verificación
        const verificationToken = jwt.sign(
            { email: email },
            "uaS#v}V%wl8'Hj7fwWEVYw'a&8Pzm!SQJ)-c6_dK9p5^-BQ!2E", 
            { expiresIn: '1h' } 
        );

        // Crear el nuevo usuario pero no marcarlo como verificado aún
        const newUser = new User({ 
            username, 
            lastnames, 
            email, 
            password,
            isVerified: false,
            googleAccount: false,
            verificationToken // Agregar el token al nuevo usuario
        });
        await newUser.save();

        // Enviar correo electrónico de verificación
        sendVerificationEmail(email, verificationToken);

        res.status(201).send('Usuario registrado con éxito. Por favor, verifica tu correo electrónico.');
    } catch (error) {
        res.status(500).send('Error al registrar usuario: ' + error.message);
    }
});

// Ruta de registro Google

app.post('/registerGoogle', async (req, res) => {
    
    try {
        const tokenGoogle = req.body;
        let credentialGoogle = tokenGoogle.tokenGoogle;
        const decoded = parseJwt(credentialGoogle);
        const username = decoded.name;
        const email = decoded.email;
        const lastnames = '';
        const password = decoded.jti;
        // Crear el nuevo usuario pero no marcarlo como verificado aún
        //Procesar el jwt recibido para extraer el mail, username

        const newUser = new User({ 
            username, 
            lastnames, 
            email, 
            password,
            isVerified: true,
            verificationToken: null, 
            googleAccount: true,
            // Agregar el token al nuevo usuario
        }); 
        
        await newUser.save();

        res.status(201).send('Usuario registrado con éxito.');
    } catch (error) {
        res.status(500).send('Error al registrar usuario: ' + error.message);
    }
});


app.get('/verify', async (req, res) => {
    try {
        const { token } = req.query;
        if (!token) {
            return res.status(400).send('No se proporcionó un token de verificación');
        }

        const decoded = jwt.verify(token, "uaS#v}V%wl8'Hj7fwWEVYw'a&8Pzm!SQJ)-c6_dK9p5^-BQ!2E");
        const user = await User.findOne({ email: decoded.email });

        if (!user) {
            return res.status(404).send('Usuario no encontrado');
        }

        if (user.isVerified) {
            return res.status(400).send('El usuario ya ha sido verificado');
        }

        user.isVerified = true;
        user.verificationToken = null; 
        await user.save();

        res.send('Cuenta verificada con éxito');
    } catch (error) {
        res.status(500).send('Error al verificar el usuario: ' + error.message);
    }
});


// Ruta de inicio de sesión
app.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send('Email o contraseña incorrectoos');
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).send('Email o contraseña incorrectxs');
        }

        const token = jwt.sign({ userId: user._id }, JWT_token , { expiresIn: '1h' });
        res.status(200).json({ token });

    } catch (error) {
        res.status(500).send('Error al iniciar sesión: ' + error.message);
    }
});

app.post('/sendMail', async(req, res) => {

    try {
        const { userName, userEmail, userMessage} = req.body;
        
        sendMail(userName, userEmail, userMessage);

        res.status(201).send('El correo se ha enviado a tiquet correctamente');
    } catch (error) {
        res.status(500).send('Problema al envíar el correor ' + error.message);
    }

});
//>>>>>>> cb696fb5ea34eb225e2bbe9b49a9213e38514c44

// Start the server
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
