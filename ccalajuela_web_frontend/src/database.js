const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ccalweb:COr8xg9bxVffb7Jh@ccalweb.kwml8n1.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB.');
});

module.exports = db;
