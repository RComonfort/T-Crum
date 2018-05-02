const Review = require('../models').Review;
const Passenger = require('../models/').Passenger;
const Driver = require('../models/').Driver;
const Crafter = require('../models/').Crafter;

module.exports = {

    //Method for creating reviews
    create(req, res) {

        if (!req.body.driver_id)
            return res.status(400).send({
                message: "The 'driver_id' attribute cannot be empty."
            });

        if (!req.body.passenger_id)
            return res.status(401).send({
                message: "The 'passenger_id' attribute cannot be empty."
            });

        if (!req.body.crafter_id)
            return res.status(402).send({
                message: "The 'crafter_id' attribute cannot be empty."
            });

        if (!req.body.score)
            return res.status(404).send({
                message: "The 'score' attribute cannot be empty."
            });

        if (!req.body.kindness_prize)
            return res.status(405).send({
                message: "The 'kindness_prize' attribute cannot be empty."
            });

        if (!req.body.cleanliness_prize)
            return res.status(406).send({
                message: "The 'cleanliness_prize' attribute cannot be empty."
            });

        if (!req.body.driving_skills_prize)
            return res.status(407).send({
                message: "The 'driving_skills_prize' attribute cannot be empty."
            });

        return Review
            .create({

                driver_id: req.body.driver_id,
                passenger_id: req.body.passenger_id,
                crafter_id: req.body.crafter_id,
                comment: req.body.comment,
                score: req.body.score,
                kindness_prize: req.body.kindness_prize,
                cleanliness_prize: req.body.cleanliness_prize,
                driving_skills_prize: req.body.driving_skills_prize
            })
            .then(review => res.status(201).send(review))
            .catch(error => res.status(408).send(error));
    },
    //Method for listing reviews
    list(req, res) {

        return Review
            .findAll({

                include: [{
                        model: Passenger,
                        as: 'passenger',
                        required: false,
                        attributes: ['id', 'first_name', 'last_name']
                    },
                    {
                        model: Driver,
                        as: 'driver',
                        required: false,
                        attributes: ['id', 'first_name', 'last_name', 'review_count', 'review_avg', 'kindness_prize_count', 'cleanliness_prize_count', 'driving_skills_prize_count']
                    },
                    {
                        model: Crafter,
                        as: 'crafter',
                        required: false,
                        attributes: ['id', 'name', 'lat', 'lng', 'isActive', 'total_seats', 'occupied_seats']
                    }
                ],

                attributes: ['id', 'driver_id', 'passenger_id', 'crafter_id', 'comment', 'score', 'kindness_prize', 'cleanliness_prize', 'driving_skills_prize', 'createdAt', 'updatedAt']
            })
            .then(reviews => res.status(200).send(reviews))
            .catch(error => res.status(400).send(error));
    },
    listReviewsByPassenger(req, res) {

        if (!req.params.passenger_id)
            return res.status(400).send({
                message: "The 'passenger_id' attribute cannot be empty."
            });

        return Review
            .findAll({

                where: {
                    passenger_id: req.params.passenger_id
                },

                include: [{
                        model: Passenger,
                        as: 'passenger',
                        required: false,
                        attributes: ['id', 'first_name', 'last_name']
                    },
                    {
                        model: Driver,
                        as: 'driver',
                        required: false,
                        attributes: ['id', 'first_name', 'last_name', 'review_count', 'review_avg', 'kindness_prize_count', 'cleanliness_prize_count', 'driving_skills_prize_count']
                    },
                    {
                        model: Crafter,
                        as: 'crafter',
                        required: false,
                        attributes: ['id', 'name', 'lat', 'lng', 'isActive', 'total_seats', 'occupied_seats']
                    }
                ],

                attributes: ['id', 'driver_id', 'passenger_id', 'crafter_id', 'comment', 'score', 'kindness_prize', 'cleanliness_prize', 'driving_skills_prize', 'createdAt', 'updatedAt']
            })
            .then(reviews => res.status(200).send(reviews))
            .catch(error => res.status(400).send(error));
    },
    //Method for retrieving reviews
    retrieve(req, res) {

        if (!req.params.id)
            return res.status(400).send({
                message: "The 'id' attribute cannot be empty."
            });

        return Review
            .findById(req.params.id, {

                include: [{
                        model: Passenger,
                        as: 'passenger',
                        required: false,
                        attributes: ['id', 'first_name', 'last_name']
                    },
                    {
                        model: Driver,
                        as: 'driver',
                        required: false,
                        attributes: ['id', 'first_name', 'last_name', 'review_count', 'review_avg', 'kindness_prize_count', 'cleanliness_prize_count', 'driving_skills_prize_count']
                    },
                    {
                        model: Crafter,
                        as: 'crafter',
                        required: false,
                        attributes: ['id', 'name', 'lat', 'lng', 'isActive', 'total_seats', 'occupied_seats']
                    }
                ],

                attributes: ['id', 'driver_id', 'passenger_id', 'crafter_id', 'comment', 'score', 'kindness_prize', 'cleanliness_prize', 'driving_skills_prize', 'createdAt', 'updatedAt']
            })
            .then(Review => {

                if (!Review) {

                    return res.status(400).send({

                        message: 'Review not found.'
                    });
                }

                return res.status(200).send(Review);
            })
            .catch(error => res.status(400).send(error));
    },
    //Method for updating reviews
    update(req, res) {

        if (!req.params.id)
            return res.status(400).send({
                message: "The 'id' attribute cannot be empty."
            });

        return Review
            .findById(req.params.id, {

                attributes: ['id', 'driver_id', 'passenger_id', 'crafter_id', 'comment', 'score', 'kindness_prize', 'cleanliness_prize', 'driving_skills_prize', 'createdAt', 'updatedAt']
            })
            .then(Review => {

                if (!Review) {

                    return res.status(400).send({

                        message: 'Review Not Found'
                    });
                }

                return Review
                    .update({

                        driver_id: req.body.driver_id || Review.driver_id,
                        passenger_id: req.body.passenger_id || Review.passenger_id,
                        crafter_id: req.body.crafter_id || Review.crafter_id,
                        comment: req.body.comment || Review.comment,
                        score: req.body.score || Review.score,
                        kindness_prize: req.body.kindness_prize || Review.kindness_prize,
                        cleanliness_prize: req.body.cleanliness_prize || Review.cleanliness_prize,
                        driving_skills_prize: req.body.driving_skills_prize || Review.driving_skills_prize
                    })
                    .then(() => res.status(200).send(Review)) // Send back the updated passenger
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    destroy(req, res) {

        if (!req.params.id)
            return res.status(400).send({
                message: "The 'id' attribute cannot be empty."
            });

        return Review
            .findById(req.params.id, {

                attributes: ['id', 'driver_id', 'passenger_id', 'crafter_id', 'comment', 'score', 'kindness_prize', 'cleanliness_prize', 'driving_skills_prize', 'createdAt', 'updatedAt']
            })
            .then(Review => {

                if (!Review) {

                    return res.status(400).send({

                        message: 'Review Not Found'
                    });
                }

                return Review
                    .destroy()
                    .then(() => res.status(200).send({

                        message: 'The review was successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
}