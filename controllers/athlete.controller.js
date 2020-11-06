const AthleteService = require('../services/athlete.service');

class AthleteController{
    constructor(){
        //on créé une nouvelle instance de AthleteService que l'on ajoute à notre attribut
        this.athleteService = new AthleteService();
    }

    async create(req,res) {
        const paramAthlete = req.body;
        res.redirect('/api/sports');
        let gender = false;
        if(paramAthlete.cbAthleteGender == 'on'){
            gender = true;
        }

        const created = await this.athleteService.create(paramAthlete,gender);
    }

    async getAllAthlete(req,res){
        const athletes = await this.athleteService.getAllAthlete();
        res.render("athletes",{athletes});
    }

    async getAllSportAthlete(req,res){
        const athleteId = req.params.athleteId;
        const sports = await this.sportService.getSportbyAthleteId(sportId);
        res.render("sportAthletes",{athleteId,sports});
    }
}

module.exports = AthleteController;