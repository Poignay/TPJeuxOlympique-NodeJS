const Sport = require('../models/sport');

// Une class SportService
class SportService {
    constructor() { }

    async create(sport) {
        const created = new Sport({
            name: sport.tbSport,
            athletes: [],
        });

        await created.save();
        return created;
    }

    async getBySportId(Id) {
        return Sport.findById(Id);
    };
    async getAllSport() {
        return Sport.find({}).sort({ createdAt: -1 });
    };

    async delete(Id) {
         const deleted = await Sport.remove({_id: Id});
         deleted.deletedCount;
         return deleted;
    };

    async createAthleteSport(sportId, athleteId){
        const sport = await Sport.findById(sportId).exec();
        let  athletes = sport.athletes;
        athletes.push(athleteId);
        const sport2 = await Sport.updateOne({_id:  sportId},{athletes: athletes});
        return sport2;
    }

    async getSportbyAthleteId(Id) {
        return await Sport.find({  athletes:  { $all : [Id]  }});
    }
}

// on n'oublie pas d'exporter notre Service
module.exports = SportService;