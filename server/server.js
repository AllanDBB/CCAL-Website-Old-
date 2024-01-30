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
const sendVerificationEmail = require('./src/mailer');

// Connect database.
connectDB();

// using cors.
app.use(cors());
// Middlewares.
app.use(bodyParser.json());

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
        
        // Crear el nuevo usuario pero no marcarlo como verificado aún
        const newUser = new User({ 
            username, 
            lastnames, 
            email, 
            password,
            isVerified: false
        });
        await newUser.save();

       
        sendVerificationEmail(email);

        res.status(201).send('Usuario registrado con éxito. Por favor, verifica tu correo electrónico.');
    } catch (error) {
        res.status(500).send('Error al registrar usuario: ' + error.message);
    }
});

// Ruta de inicio de sesión
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send('Email o contraseña incorrectos');
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).send('Email o contraseña incorrectos');
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).send('Error al iniciar sesión: ' + error.message);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
