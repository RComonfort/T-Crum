const Passenger = require('../models/').Passenger;

module.exports = {

    create(req, res) {
        return Passenger
          .create({
            id: req.body.id,
            password: req.body.password,
            first_name: req.body.first_name,
            last_name: req.body.last_name
          })
          .then(todo => res.status(201).send(todo))
          .catch(error => res.status(400).send(error));
      },
}