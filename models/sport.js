const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// le schéma structure le document que l'on va utiliser sur notre projet
// on y définit les champs et les types !!
const sportSchema = new Schema({
    name: String, 
    athletes: [{type: Schema.Types.ObjectId, ref: 'Athlete' }]
});

const Sport = mongoose.model('Sport', sportSchema);
module.exports =Sport;