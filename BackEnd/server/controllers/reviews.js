const Review = require('../models').Review;
const Passenger = require('../models/').Passenger;
const Driver = require('../models/').Driver;
const Crafter = require('../models/').Crafter;

module.exports = {

    //Method for creating reviews
    create(req, res) {
        return Review
            .create({

                driver_id: req.body.driver_id,
                passenger_id: req.body.passenger_id,
                crafter_id: req.body.crafter_id,
                comment: req.body.comment,
                score: req.body.score,
                kindness_prize: req.body.kindness_prize,
                cleanliness_prize: req.body.cleanliness_prize,
                driving_skilss_prize: req.body.driving_skilss_prize
            })
            .then(todo => res.status(201).send(todo))
            .catch(error => res.status(400).send(error));
    },
    //Method for listing reviews
    list(req, res) {

        return Review
            .findAll({

                include: [
                    {
                        model: Passenger,
                        as: 'passenger'
                    },
                    {
                        model: Driver,
                        as: 'driver',
                    },
                    {
                        model: Crafter,
                        as: 'crafter'
                    }
                ],
            })
            .then(reviews => res.status(200).send(reviews))
            .catch(error => res.status(400).send(error));
    },
}