const Sport = require('../models/sport');

// Une class tweetService
class SportService {
    constructor() { }

    async create(sport) {
        const created = new Sport({
            name: sport.tbSport,
            Athlete: [],
        });

        await created.save();
        return created;
    }

    async getBySportId(Id) {
        return Sport.findById(Id);
    };
    async getAllSport(Id) {
        return Sport.find({}).sort({ createdAt: -1 });
    };

    async delete(Id) {
        return Sport.delete({Id : Id})
    };
}

// on n'oublie pas d'exporter notre Service
module.exports = SportService;