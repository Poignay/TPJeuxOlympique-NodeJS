const express = require('express');
const AthleteController = require('../controllers/athlete.controller');

// on créé une nouvelle instance de notre controller !
const athleteController = new AthleteController();
// on spécifie le router express
const router = express.Router();

//Créer un athlète
router.post('/api/athletes', async (req, res) => {
    athleteController.create(req,res);
});

//Lister les athlète
router.get('/api/athletes', async (req,res)=> {
    athleteController.getAllAthlete(req,res);
})

//Consulter les sports d'un athlète
router.get('/api/athletes/:athleteId/sports', async (req,res)=> {
    athleteController.getAllSportAthlete(req,res);
})

// ici pas de classe, on export directement l'objet route
module.exports = router;