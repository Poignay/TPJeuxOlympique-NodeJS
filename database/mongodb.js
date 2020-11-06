const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://admin:502IMghL5HGLcV5n@cluster0.egkuj.mongodb.net/jeuxOlympique?retryWrites=true&w=majority', { useNewUrlParser: true });
    } catch (err) {
        console.error('impossible de se connecter à la base de donnée', err);
        throw err;
    }

    console.info('connection to the database established...');
}

module.exports = connect;
 