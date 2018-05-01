const authMiddleware = require('../middlewares/authentication');

const authenticationController = require('../controllers').authentication;
const passengersController = require('../controllers').passengers;
const reviewsController = require('../controllers').reviews;
const craftersController = require('../controllers').crafters;
const stationsController = require('../controllers').stations;
const driversController = require('../controllers').drivers;
const arrivalsController = require('../controllers').arrivals;

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
  app.put('/api/passengers/:id', passengersController.update);
  app.delete('/api/passengers/:id', passengersController.destroy);

   //Routes for the Drivers table
   app.post('/api/drivers', driversController.create);
   app.get('/api/drivers', driversController.list);
   app.get('/api/drivers/:id', driversController.retrieve);
   app.put('/api/drivers/:id', driversController.update);
   app.delete('/api/drivers/:id', driversController.destroy);

  //Routes for the Reviews table
  app.post('/api/reviews', reviewsController.create);
  app.get('/api/reviews', reviewsController.list);
  app.get('/api/reviews/:id', reviewsController.retrieve);
  app.put('/api/reviews/:id', reviewsController.update);
  app.delete('/api/reviews/:id', reviewsController.destroy);

  //Routes for the Crafter table
  app.post('/api/crafters', craftersController.create);  
  app.get('/api/crafters', craftersController.list);
  app.get('/api/crafters/:id', craftersController.retrieve);
  app.put('/api/crafters/:id', craftersController.update);
  app.delete('/api/crafters/:id', craftersController.destroy);

  //Routes for the Station table
  app.post('/api/stations', stationsController.create);  
  app.get('/api/stations', stationsController.list);
  app.get('/api/stations/:id', stationsController.retrieve);
  app.put('/api/stations/:id', stationsController.update);
  app.delete('/api/stations/:id', stationsController.destroy);

  //Routes for the Arrivals table
  app.post('/api/arrivals', arrivalsController.create);
  app.get('/api/arrivals', arrivalsController.list);
  app.get('/api/arrivals/:id', arrivalsController.retrieve);
};