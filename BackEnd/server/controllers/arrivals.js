const Arrival = require('../models/').Arrival;
const Crafter = require('../models/').Crafter;
const Station = require('../models/').Station;

module.exports = {

    //Method for creating arrivals
    create(req, res) {

        if (!req.body.crafter_id)
            return res.status(400).send({
                message: "The 'crafter_id' attribute cannot be empty."
            });

        if (!req.body.station_id)
            return res.status(401).send({
                message: "The 'station_id' attribute cannot be empty."
            });

        return Arrival
            .create({

                crafter_id: req.body.crafter_id,
                station_id: req.body.station_id
            })
            .then(arrival => res.status(201).send(arrival))
            .catch(error => res.status(408).send(error));
    },
    //Method for listing arrivals
    list(req, res) {

        return Arrival 
            .findAll({

                include: [
                    {
                        model: Crafter,
                        as: 'crafter',
                        required: false,
                        attributes: ['id', 'name', 'lat', 'lng', 'isActive', 'total_seats', 'occupied_seats']
                    },
                    {
                        model: Station,
                        as: 'station',
                        required: false, 
                        attributes: ['id', 'name', 'lat', 'lng', 'waiting_people', 'next_crafter_arrival_time', 'next_crafter_id']
                    }
                ],

                attributes: ['id', 'crafter_id', 'station_id', 'createdAt', 'updatedAt']
            })
            .then(arrivals => res.status(200).send(arrivals))
            .catch(error => res.status(400).send(error));
    },
    //Method for retrieving arrivals
    retrieve(req, res) {

        if (!req.params.id)
            return res.status(400).send({
                message: "The 'id' attribute cannot be empty."
            });

        return Arrival
            .findById(req.params.id, {

                include: [
                    {
                        model: Crafter,
                        as: 'crafter',
                        required: false,
                        attributes: ['id', 'name', 'lat', 'lng', 'isActive', 'total_seats', 'occupied_seats']
                    },
                    {
                        model: Station,
                        as: 'station',
                        required: false, 
                        attributes: ['id', 'name', 'lat', 'lng', 'waiting_people', 'next_crafter_arrival_time', 'next_crafter_id']
                    }
                ],

                attributes: ['id', 'crafter_id', 'station_id', 'createdAt', 'updatedAt']
            })
            .then(Arrival => {

                if (!Arrival) {

                    return res.status(400).send({

                        message: 'Arrival not found.'
                    });
                }

                return res.status(200).send(Arrival);
            })
            .catch(error => res.status(400).send(error));
    },
    //Method to update arrivals
    update(req, res) {

        if (!req.params.id)
            return res.status(400).send({
                message: "The 'id' attribute cannot be empty."
            });

        return Arrival
            .findById(req.params.id, {

                attributes: ['id', 'crafter_id', 'station_id', 'createdAt', 'updatedAt']
            })
            .then(Arrival => {

                if(!Arrival) {

                    return res.status(400).send({

                        message: 'Arrival not found'
                    });
                }

                return Arrival
                    .update({

                        crafter_id: req.body.crafter_id || Arrival.crafter_id,
                        station_id: req.body.station_id ||  Arrival.station_id
                    })
                    .then(() => res.status(200).send(Arrival))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },
    //Method to destroy arrivals
    destroy(req, res) {

        if (!req.params.id)
            return res.status(400).send({
                message: "The 'id' attribute cannot be empty."
            });

        return Arrival
            .findById(req.params.id, {

                attributes: ['id', 'crafter_id', 'station_id', 'createdAt', 'updatedAt']
            })
            .then(Arrival => {

                if(!Arrival) {

                    return res.status(400).send({

                        message: 'Arrival not found'
                    });
                }

                return Arrival
                    .destroy()
                    .then(() => res.status(200).send({

                        message: 'The arrival was successfully deleted'
                    }))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
}