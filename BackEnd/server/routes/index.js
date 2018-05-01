const authMiddleware = require('../middlewares/authentication');

const authenticationController = require('../controllers').authentication;
const projectsController = require('../controllers').projects;
const passengersController = require('../controllers').passengers;
const reviewsController = require('../controllers').reviews;

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

  //Routes for the Reviews table
  app.post('/api/reviews', reviewsController.create);
  app.get('/api/reviews', reviewsController.list);
  app.get('/api/reviewsByUser/:passenger_id', reviewsController.listReviewsByUser);
  app.get('/api/reviews/:id', reviewsController.retrieve);
  app.put('/api/reviews/:id', reviewsController.update);
  app.delete('/api/reviews/:id', reviewsController.destroy);
};