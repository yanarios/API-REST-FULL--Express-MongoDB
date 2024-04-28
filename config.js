const mongoose = require('mongoose');

// Función para conectar a la base de datos
const dbconnect = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/users_prueba', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error de conexión:', error);
    }
};

module.exports = dbconnect;
