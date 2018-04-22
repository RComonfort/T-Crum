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
  //Method for listing passengers
  list(req, res) {

    return Passenger
      .findAll()
      .then(passengers => res.status(200).send(passengers))
      .catch(error => res.status(400).send(error));
  },
  //Method for retrieving a single passenger
  retrieve(req, res) {

    return Passenger
      .findById(req.params.id, {})
      .then(passenger => {

        if (!passenger) {

          return res.status(404).send({

            message: 'Passenger Not Found',
          });
        }

        return res.status(200).send(passenger);
      })
      .catch(error => res.status(404).send(error));
  },
}