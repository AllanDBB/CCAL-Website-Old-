const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://ccalweb:NUPlrpr7OQZNScEc@ccalweb.kwml8n1.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conexión exitosa a MongoDB');
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
