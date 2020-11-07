const SportService = require('../services/sport.service');
const AthleteService = require('../services/athlete.service');
const CodeApha2Api = require('../api/country');

class SportController {
    constructor() {
        // on créé une nouvelle instance de SportService que l'on ajoute à notre attribut
        this.sportService = new SportService();
        this.athleteService = new AthleteService();
        this.codeApha2Api = new CodeApha2Api();
    }

    async create(req, res) {
        const paramSport = req.body;
        res.redirect('/api/sports');

        const created = await this.sportService.create(paramSport);
    }

    async createAthleteSport(req, res) {
        const sportId = req.params.sportId;
        const athleteId = req.params.athleteId;
        res.redirect('/api/sports');
        const created = await this.sportService.createAthleteSport(sportId,athleteId);
    }    
    
    async getBySportId(req, res) {
        const sportId = req.params.sportId;
        const sport = await this.sportService.getBySportId(sportId);
        const athletes = await this.athleteService.getBySportId(sport);
        let athletesPays=[];
        for(let elem of athletes){
            const pays = await this.codeApha2Api.getName(elem.country);
            athletesPays.push({firstName: elem.firstName,lastName: elem.lastName,gender: elem.gender,country:  pays})
        }
        res.render('sportAthletes', { sport,athletesPays});
    }
    
    async getAllSport(req, res) {
        const sports = await this.sportService.getAllSport(); 
        const athletes = await this.athleteService.getAllAthlete(); 
        res.render("sports",{sports,athletes});
    }

    async deleteSport(req, res) {
        const sportId = req.params.sportId;
        res.redirect('/api/sports');

        const deleted = await this.sportService.delete(sportId);
    }
    
}

// on n'oublie pas d'exporter notre Controller
module.exports = SportController;