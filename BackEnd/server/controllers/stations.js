const Station = require('../models').Station;
const Crafter = require('../models').Crafter;

module.exports = {
	create (req, res){
		// check that params are not null, undefined or empty string
        if (!req.body.name) {
            return res.status(400).send({
                message: 'Station name cannot be empty'
            });
		}
		if (isNaN(req.body.lat)) {
            return res.status(400).send({
                message: 'Station latitude must be a valid number'
            });
		}
		if (isNaN(req.body.lng)) {
            return res.status(400).send({
                message: 'Station latitude must be a valid number'
            });
		}
		if (isNaN(req.body.waiting_people)) {
            return res.status(400).send({
                message: 'Station waiting people must be a valid number'
            });
		}
		if (isNaN(req.body.next_crafter_arrival_time)) {
            return res.status(400).send({
                message: 'Station next crafter arrival time must be a valid number'
            });
		}
		if (isNaN(req.body.next_crafter_id)) {
            return res.status(400).send({
                message: 'Station next crafter id must be a valid number'
            });
		}

		return Station
			.create ({
				name: req.body.name,
				lat: 'lat' in req.body ? req.body.lat : 0.0,
				lng: 'lng' in req.body ? req.body.lng : 0.0,
				waiting_people: 'waiting_people' in req.body ? req.body.waiting_people : 0,
				next_crafter_arrival_time: 'next_crafter_arrival_time' in req.body ? req.body.next_crafter_arrival_time : 100.0,
				next_crafter_id: 'next_crafter_id' in req.body ? req.body.next_crafter_id : 1,
			})
			.then (station => res.status(200).send(station))
			.catch(error => res.status (400).send(error));
	},
	list (req, res)
	{
		return Station
			.findAll({
				include: [{
					model: Crafter,
					as: 'next_crafter',
					required: false
				}]
			})
			.then(stations => res.status(200).send(stations))
            .catch(error => res.status(400).send(error));
	},
	retrieve (req, res)
	{
		if (!req.params.id || isNaN(req.params.id)) {
			return res.status (400).send({
				message: 'The Station ID must be a valid number'
			});
		}
		return Station
			.findById(req.params.id, {
				include: [{
					model: Crafter,
					as: 'next_crafter',
					required: false
				}]
			})
			.then(station => {
				if (!station) {
					return res.status(400).send({
						message: 'Station not found.'
					});
				}
				return res.status(200).send(station);
			})
			.catch(error => res.status(400).send(error));
	},
	update (req, res)
	{
		if (!req.params.id || isNaN(req.params.id)) {
			return res.status (400).send({
				message: 'The Station ID must be a valid number'
			});
		}

		return Station
			.findById(req.params.id, {

			})
			.then (station => {
				if (!station) {
					return res.status(400).send({
						message: 'Station not found/'
					})
				}
				return station
					.update({
						name: req.body.name || station.name,
						lat: req.body.lat || station.lat,
						lng: req.body.lng || station.lng,
						waiting_people: req.body.waiting_people || station.waiting_people,
						next_crafter_arrival_time: req.body.next_crafter_arrival_time || station.next_crafter_arrival_time, 
						next_crafter_id: req.body.next_crafter_id || station.next_crafter_id,
					})
					.then(station => res.status(200).send(station))
                    .catch((error) => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
	},
	destroy (req, res)
	{
		if (!req.params.id) {
			return res.status (400).send({
				message: 'The Station ID cannot be empty'
			});
		}

		return Station
			.findById (req.params.id, {

			})
			.then (station => {
				if (!station){
					return res.status(400).send({
						message: 'Station not found.'
					})
				}

				return station
					.destroy()
					.then(()=> rest.status(200).send({
						message: 'Station deleted'
					}))
					.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
	}
}