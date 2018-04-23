const Passenger = require('../models/').Passenger;

module.exports = {

  create(req, res) {

    if (!req.body.id)
      return res.status(400).send({
        message: "The 'id' attribute cannot be empty."
      });

    if (!req.body.password)
      return res.status(400).send({
        message: "The 'password' attribute cannot be empty."
      });

    if (!req.body.first_name)
      return res.status(400).send({
        message: "The 'first_name' attribute cannot be empty."
      });

    if (!req.body.last_name)
      return res.status(400).send({
        message: "The 'last_name' attribute cannot be empty."
      });

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

    if (!req.params.id)
      return res.status(400).send({
        message: "The 'id' attribute cannot be empty."
      });

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
  //Method for updating a passenger
  update(req, res) {

    if (!req.params.id)
      return res.status(400).send({
        message: "The 'id' attribute cannot be empty."
      });

    return Passenger
      .findById(req.params.id, {})
      .then(passenger => {

        if (!passenger) {

          return res.status(404).send({

            message: 'Passenger Not Found',
          });
        }

        return passenger
          .update({

            first_name: req.body.first_name || passenger.first_name,
            last_name: req.body.last_name || passenger.last_name,
            password: req.body.password || passenger.password
          })
          .then(() => res.status(200).send(passenger)) // Send back the updated passenger
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  //Method to delete a passenger
  destroy(req, res) {

    if (!req.params.id)
      return res.status(400).send({
        message: "The 'id' attribute cannot be empty."
      });

    return Passenger
      .findById(req.params.id)
      .then(passenger => {

        if (!passenger) {

          return res.status(400).send({

            message: 'Passenger Not Found',
          });
        }

        return passenger
          .destroy()
          .then(() => res.status(200).send({

            message: 'Passenger deleted successfully',
          }))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(404).send(error));
  }
}