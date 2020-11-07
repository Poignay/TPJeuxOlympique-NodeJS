const express = require('express');
const SportController = require('../controllers/sport.controller');

// on créé une nouvelle instance de notre controller !
const sportController = new SportController();
// on spécifie le router express
const router = express.Router();


// Créer un sport
router.post('/api/sports', async (req, res) => {
    sportController.create(req, res);
});

//Ajouter un athlete à un sport
router.post('/api/sports/:sportId/athletes/:athleteId', async (req, res) => {
    sportController.createAthleteSport(req, res);
});

//Delete sport
router.post('/api/sports/delete/:sportId', async (req, res) => {
    sportController.deleteSport(req, res);
});

//Lister les sports
router.get('/api/sports', async function (req, res) {
    sportController.getAllSport(req, res);
});

//Consulter un sport
router.get('/api/sports/:sportId', async function (req, res) {
    sportController.getBySportId(req, res);
});





// ici pas de classe, on export directement l'objet route
module.exports = router;