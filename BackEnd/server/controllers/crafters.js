const Station = require('../models').Station;
const Review = require('../models').Review;
const Crafter = require('../models').Crafter;


module.exports = {
	create (req, res) {

		//Check that the required parameters are not empty

		if (!req.body.id) {
			return res.status (400).send({
				message: 'The Crafter ID cannot be empty'
			});
		}
		if (!req.body.name) {
			return res.status (400).send({
				message: 'The Crafter name cannot be empty'
			});
		}
		if (isNaN(req.body.lat)) {
			return res.status (400).send({
				message: 'The Crafter latitude must be a number'
			});
		}
		if (isNaN(req.body.lng)) {
			return res.status (400).send({
				message: 'The Crafter longitude must be a number'
			});
		}
		if (!req.body.isActive) {
			return res.status (400).send({
				message: 'The Crafter must be specifiy to be active or not' 
			});
		}
		if (!req.body.total_seats || isNaN(req.body.total_seats)) {
			return res.status (400).send({
				message: 'The Crafter must have a valid number of total seats'
			});
		}
		if (!req.body.occupied_seats || isNaN(req.body.occupied_seats)) {
			return res.status (400).send({
				message: 'The Crafter must have a valid number of occupied seats'
			});
		}

		return Crafter
			.create ({
				id: req.body.id,
				name: req.body.name,
				lat: 'lat' in req.body ? req.body.lat : 0.0,
				lng: 'lng' in req.body ? req.body.lng : 0.0,
				isActive: req.body.isActive,
				total_seats: req.body.total_seats,
				occupied_seats: req.body.occupied_seats
			})
			.then (crafter => res.status(200).send(crafter))
			.catch(error => res.status (400).send(error));	
	},
	list (req, res)
	{
		return Crafter
			.findAll({
				include: [
					{
						model: Station,
						as: 'stations',
						through: {
							attributes: ['id']
						},
						required: false
					}, 
					{
						model: Review,
						as: 'reviews',
						through: {
							attributes: ['id']
						},
						required: false
					}
				]
			})
			.then(crafters => res.status(200).send(crafters))
            .catch(error => res.status(400).send(error));
	},
	retrieve (req, res)
	{
		if (!req.body.id) {
			return res.status (400).send({
				message: 'The Crafter ID cannot be empty'
			});
		}

		return Crafter
			.findById(req.params.id, {
				include: [
					{
						model: Station,
						as: 'stations',
						through: {
							attributes: ['id']
						},
						required: false
					}, 
					{
						model: Review,
						as: 'reviews',
						through: {
							attributes: ['id']
						},
						required: false
					}
				]
			})
			.then(crafters => {
                if (!crafters) {
                    return res.status(400).send({
                        message: 'Crafter not found.'
                    });
                }
                return res.status(200).send(crafters);
            })
            .catch(error => res.status(400).send(error));
	},
	update (req, res)
	{
		if (!req.body.id) {
			return res.status (400).send({
				message: 'The Crafter ID cannot be empty'
			});
		}
		
		return Crafter
			.findById(req.params.id, {

			})
			.then(crafter => {
                if (!crafter) {
                    return res.status(400).send({
                        message: 'Crafter not found.'
                    });
                }
				return crafter
					.update ({
						name: req.body.name || crafter.name,
						lat: req.body.lat || crafter.lat,
						lng: req.body.lng || crafter.lng,
						isActive: req.body.isActive || crafter.isActive,
						total_seats: req.body.total_seats || crafter.total_seats,
						occupied_seats: req.body.occupied_seats || crafter.occupied_seats
					})
					.then(crafter => res.status(200).send(crafter))
                    .catch((error) => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
	},
	destroy (req, res)
	{
		if (!req.body.id) {
			return res.status (400).send({
				message: 'The Crafter ID cannot be empty'
			});
		}

		return Crafter
			.findById(req.params.id, {
				
			})
			.then(crafter => {
                if (!crafter) {
                    return res.status(400).send({
                        message: 'Crafter not found.'
                    });
                }
                return crafter
					.destroy()
					.then(() => res.status(200).send({
						message: 'Crafter deleted'
					}))
					.catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
	},
}