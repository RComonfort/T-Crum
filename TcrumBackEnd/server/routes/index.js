const tareasController = require('../controllers').tareas;
const logsController = require('../controllers').logs;
const sprintsController = require('../controllers').sprints;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the TCRUM Project API!',
  }));

  //Routes for the TAREAS table
  app.post('/api/tareas', tareasController.create);  
  app.get('/api/tareas', tareasController.list);
  app.get('/api/tareas/:id', tareasController.retrieve);
  app.put('/api/tareas/:id', tareasController.update);
  app.delete('/api/tareas/:id', tareasController.destroy);

  //Routes for the LOGS table
  app.post('/api/logs', logsController.create);  
  app.get('/api/logs', logsController.list);
  app.get('/api/logs/:id', logsController.retrieve);

  //Routes fot the SPRINTS table
  app.post('/api/sprints', sprintsController.create);  
  app.get('/api/sprints', sprintsController.list);
  app.get('/api/sprints/:id', sprintsController.retrieve);
  app.put('/api/sprints/:id', sprintsController.update);
  app.delete('/api/sprints/:id', sprintsController.destroy);
};