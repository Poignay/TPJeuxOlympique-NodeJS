const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// le schéma structure le document que l'on va utiliser sur notre projet
// on y définit les champs et les types !!
const tweetSchema = new Schema({
    username: String, 
    password: String
});

// on créé un model de notre tweet (attention la collection doit être égal au nom de notre model au pluriel !! exemple Nom database tweets, nom dui model tweet)
module.exports = mongoose.model('utilisateur', tweetSchema);