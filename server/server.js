const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/database'); 
const uploadHome = require('./src/uploadHome');
const uploadAchievements = require('./src/uploadAchievements.js');
const multer = require('multer');

const app = express();
const port = process.env.PORT || 3001;

// Connect database.
connectDB();

// Middlewares.
app.use(bodyParser.json());

// Testing route.
app.get('/', (req, res) => {
  res.send('Prueba pasada.');
});

// Route to upload to home banner files.

app.post('/uploadHome', uploadHome.single('file'), (req, res) => {

  console.log('uploadPath:', req.body.uploadPath);
  res.send('Archivo subido con éxito!')

});

// Route to upload to achievements banner files.

app.post('/uploadAchievements', uploadAchievements.single('file'), (req, res) => {

  console.log('uploadPath:', req.body.uploadPath);
  res.send('Archivo subido con éxito!')

});


// Start the server
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
