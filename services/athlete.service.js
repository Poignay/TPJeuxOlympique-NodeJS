const Athlete = require('../models/athlete');

//Une class AthleteService
class AthleteService {
    constructor() { }

    async create(athlete,gender){
        const created = new Athlete({
            firstName: athlete.tbAthleteFirstName,
            lastName: athlete.tbAthleteLastName,
            gender: gender,
            country: athlete.sCountry
        });

        await created.save();
        return created;
    }

    async getByAthleteId(Id) {
        return Athlete.findById(Id);
    };

    async getAllAthlete(id) {
        return Athlete.find({}).sort({createdAt:-1});
    }

    async delete(Id) {
        return Athlete.delete({Id : Id})
    };    

    async getBySportId(sport){
        let athletes = [];
        for (let athleteSport of sport.athletes){
            const athleteId = athleteSport._id.toString();
            const athlete = await Athlete.findById(athleteId).exec();
            athletes.push(athlete);
        }
        return athletes;
    };
}

// on n'oublie pas d'exporter notre Service
module.exports = AthleteService;