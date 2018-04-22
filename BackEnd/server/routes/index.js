const authMiddleware = require('../middlewares/authentication');

const authenticationController = require('../controllers').authentication;
const projectsController = require('../controllers').projects;
const passengersController = require('../controllers').passengers;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the VW Passenger App API!',
  }));

  //Autentication routes
  app.post('/api/login', authenticationController.login);

  //Routes for the Passengers table
  app.post('/api/passengers', passengersController.create);
  app.get('/api/passengers', passengersController.list);
  app.get('/api/passengers/:id', passengersController.retrieve);
};