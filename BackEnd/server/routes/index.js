const authMiddleware = require('../middlewares/authentication');


const projectsController = require('../controllers').projects;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the TCRUM Project API!',
  }));

  //Autentication routes
  app.post('/api/login', authenticationController.login);

  //Routes for the Project table
  app.post('/api/projects', projectsController.create);  
  app.get('/api/projects', projectsController.list);
  app.get('/api/projects/:id', projectsController.retrieve);
  app.put('/api/projects/:id', projectsController.update);
  app.delete('/api/projects/:id', projectsController.destroy);
};