
const express = require('express');
const connect = require('./database/mongodb');
const athleteRouter = require('./routers/athlete.router');
const sportRouter = require('./routers/sport.router');
const utilisateurRouter = require('./routers/utilisateur.router');
const path = require('path');

connect();

const app = express();
const port = 3000;

const methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use('/', athleteRouter);
app.use('/', sportRouter);
//app.use('/', utilisateurRouter);

app.set('view engine', 'hbs');
// on indique que nos vues se trouverons toujours dans le dossier views 
app.set('views', path.join(__dirname, 'views'));



app.get('/', (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Jeux Olympique listening at http://localhost:${port}`)
});