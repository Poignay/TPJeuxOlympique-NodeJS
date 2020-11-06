const express = require('express');
const SportController = require('../controllers/sport.controller');
const path = require('path');

// on créé une nouvelle instance de notre controller !
const sportController = new SportController();
// on spécifie le router express
const router = express.Router();


// Créer un sport
router.post('/api/sports', async (req, res) => {
    sportController.create(req, res);
});
//Ajouter un athlete à un sport
router.post('api/sports/{sportId}/athletes/{athleteId}', async (req, res) => {
    sportController.createAthleteSport(req, res);
});

//Supprimer uin athlete d'un sport
router.delete('/api/sports/{sportId}/athletes/{athleteId}', async (req, res) => {
    sportController.deleteAtheleSport(req, res);
});
//Supprimer un sport
router.delete('/api/sports/{sportId}', async (req, res) => {
    sportController.delete(req, res);
});

//Mettre à jour un sport
router.put('/api/sport/{sportId}', async (req, res) => {
    sportController.modifier(req, res);
});


//Consulter un sport
router.get('/api/sports/{sportId}', async function (req, res) {
    sportController.getBySportId(req, res);
});
//Lister les sports
router.get('/api/sports', async function (req, res) {
    sportController.getAllSport(req, res);
});
//Consulter les athlète d'un sport
router.get('/api/sports/{sportId}/athletes', async function (req, res) {
    sportController.getAllAthleteSport(req, res);
});


// ici pas de classe, on export directement l'objet route
module.exports = router;