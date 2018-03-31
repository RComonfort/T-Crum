const authMiddleware = require('../middlewares/authenticated');

const authController = require('../controllers').authentication;
const tasksController = require('../controllers').tasks;
const logsController = require('../controllers').logs;
const sprintsController = require('../controllers').sprints;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the TCRUM Project API!',
  }));

  // Authentication routes
  app.post('/api/login', authController.login);
  
  //Routes for the TAREAS table
  app.post('/api/tasks', tasksController.create);  
  app.get('/api/tasks', tasksController.list);
  app.get('/api/tasks/:id', tasksController.retrieve);
  app.put('/api/tasks/:id', tasksController.update);
  app.delete('/api/tasks/:id', tasksController.destroy);

  //Routes for the LOGS table
  app.post('/api/logs', authMiddleware.ensureAuth, logsController.create);  
  app.get('/api/logs', authMiddleware.ensureAuth, logsController.list);
  app.get('/api/logs/:id', authMiddleware.ensureAuth, logsController.retrieve);

  //Routes fot the SPRINTS table
  app.post('/api/sprints', sprintsController.create);  
  app.get('/api/sprints', sprintsController.list);
  app.get('/api/sprints/:id', sprintsController.retrieve);
  app.put('/api/sprints/:id', sprintsController.update);
  app.delete('/api/sprints/:id', sprintsController.destroy);
};