const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(bodyParser.json());

// MongoDB URI
const dbURI = 'mongodb+srv://ccalweb:NUPlrpr7OQZNScEc@ccalweb.kwml8n1zmongodb.net/?retryWrites=true&w=majority';

// Conectar a MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend funcionando!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
