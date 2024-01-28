const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./src/database'); 
const upload = require('./src/multer')

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

// Route to upload files.

app.post('/upload', upload.single('file'), (req, res) => {

  res.send('Archivo subido con éxito!')

});

// Start the server
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
