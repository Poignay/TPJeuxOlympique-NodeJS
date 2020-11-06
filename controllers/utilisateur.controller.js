const UtilisateurService = require('../services/utilisateur.service');

class UtilisateurController {
    constructor() {
        // on créé une nouvelle instance de CommentService que l'on ajoute à notre attribut
        this.utilisateurService = new UtilisateurService();
    }

    async create(req, res) {
        const paramTweet = req.body;
        await tweet.save();
        res.redirect('/accueil');
        // on fera la vérification de l'existence du tweet en Exercice

        const created = await this.tweetService.create(paramTweet);
        res.send(created);
    }
}