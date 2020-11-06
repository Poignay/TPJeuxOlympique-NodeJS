const Athlete = require('../models/athlete');

//Une class AthleteService
class AthleteService {
    constructor() { }

    async create(athlete,gender){
        const created = new Athlete({
            firstName: athlete.tbAthleteFirstName,
            lastName: athlete.tbAthleteLastName,
            gender: gender,
            country: athlete.tbAthleteCountry
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
}

// on n'oublie pas d'exporter notre Service
module.exports = AthleteService;