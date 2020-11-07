const AthleteService = require('../services/athlete.service');
const CodeApha2Api = require('../api/country');
const SportService = require('../services/sport.service');

class AthleteController{
    constructor(){
        //on créé une nouvelle instance de AthleteService que l'on ajoute à notre attribut
        this.athleteService = new AthleteService();
        this.codeApha2Api = new CodeApha2Api();
        this.sportService = new SportService();
    }

    async create(req,res) {
        const paramAthlete = req.body;
        res.redirect('/api/athletes');
        let gender = false;
        if(paramAthlete.cbAthleteGender == 'on'){
            gender = true;
        }

        const created = await this.athleteService.create(paramAthlete,gender);
    }

    async getAllAthlete(req,res){
        const athletes = await this.athleteService.getAllAthlete();
        const codeAphas = await this.codeApha2Api.getCodeApha2();
        let athletesPays=[];
        for(let elem of athletes){
            const pays = await this.codeApha2Api.getName(elem.country);
            let gender = "Female";
            if (elem.gender){
                gender="Male";
            }
            athletesPays.push({id: elem._id,firstName: elem.firstName,lastName: elem.lastName,gender: gender,country:  pays})
        }
        res.render("athletes",{athletesPays,codeAphas});
    }

    async getAllSportAthlete(req,res){
        const athleteId = req.params.athleteId;
        const athlete = await this.athleteService.getByAthleteId(athleteId);
        const sports = await this.sportService.getSportbyAthleteId(athleteId);
        const pays = await this.codeApha2Api.getName(athlete.country);
        let gender = "Female";
        if(athlete.gender){
            gender="Male";
        }
        res.render("athletesports",{ athlete , sports, pays , gender});
    }
}

module.exports = AthleteController;