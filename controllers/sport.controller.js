const SportService = require('../services/sport.service');

class SportController {
    constructor() {
        // on créé une nouvelle instance de CommentService que l'on ajoute à notre attribut
        this.sportService = new SportService();
    }

    async create(req, res) {
        const paramSport = req.body;
        res.redirect('/api/sports');

        const created = await this.sportService.create(paramSport);
    }

    async createAthleteSport(req, res) {
        const sportId = req.params.sportId;
        const athlete = req.body;
        res.redirect('/api/sports/'+sportId);
        const created = await this.sportService.createAthleteSport(sportId,athlete);
    }    
    
    async getBySportId(req, res) {
        const sportId = req.params.sportId;
        const sport = await this.sportService.getBySportId(sportId);
        res.render('tweet', { sport});
    }
    
    async getAllSport(req, res) {
        const sports = await this.sportService.getAllSport(); 
        res.render("sports",{sports});
    }
    
    async getAllAthleteSport(req, res) {
        const sportId = req.params.sportId;
        const athletes = await this.athleteService.getAthleteBySportId(sportId);
        res.render("athleteSports",{sportId,athletes});
    }
    
    async New(req, res) {
        res.redirect("newSport");
    }

}

// on n'oublie pas d'exporter notre Controller
module.exports = SportController;