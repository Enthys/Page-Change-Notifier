const mongoose = require('mongoose');

const Collection = require('./../Collectors.js').MobileBGCarCollection;
const MobileBGCollection = require('./../Collectors.js').MobileBG;

const ListeningSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    listeningType: { 
        type: String, 
        required: true, 
        trim: true, 
        lowecase: true
    },
    searchParams: { 
        type: mongoose.Schema.Types.Mixed, 
        required: true
    },
    shownCars: {
        type: Array,
        default: [],
        required: false,
    }
});

/**
 * Call out to god if you ever have to change something in this one
 */
ListeningSchema.statics.getNewCarsFromListenings = async function(Listenings) {
    return new Promise(resolve => {
        let collection = new MobileBGCollection();
        let data = {};
        
        let cars = Listenings.map(listening => {
            return new Promise(resolve => {
                data = {
                    page: 1,
                    shownCars: listening.shownCars,
                    seen: 0,
                    cars: new Collection(),
                };
        
                collection.getNewCars(listening.searchParams, data).then(({cars}) => {
                    listening.shownCars = listening.shownCars.concat(cars.getNewCarLinks());
                    listening.save((err, updatedListening) => {
                        if (!err) {
                            resolve(cars.newCars);
                        }
                    })
                });
            })
        });
        
        let result = Promise.all(cars);
        result.then(res => {
            resolve(res[0]);
        });
    })
}

const Listening = mongoose.model('Listening', ListeningSchema);

module.exports = Listening;

