const tasksController = require('../controllers').tasks;
const logsController = require('../controllers').logs;
const sprintsController = require('../controllers').sprints;
const acceptance_criteriaController = require('../controllers').acceptance_criteria;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the TCRUM Project API!',
  }));

  //Routes for the TAREAS table
  app.post('/api/tasks', tasksController.create);  
  app.get('/api/tasks', tasksController.list);
  app.get('/api/tasks/:id', tasksController.retrieve);
  app.put('/api/tasks/:id', tasksController.update);
  app.delete('/api/tasks/:id', tasksController.destroy);

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

  //Routes for the ACCEPTANCE_CRITERIA table
  app.post('/api/acceptance-criteria', acceptance_criteriaController.create);  
  app.get('/api/acceptance-criteria', acceptance_criteriaController.list);
  app.get('/api/acceptance-criteria/:id', acceptance_criteriaController.retrieve);
  app.put('/api/acceptance-criteria/:id', acceptance_criteriaController.update);
  app.delete('/api/acceptance-criteria/:id', acceptance_criteriaController.destroy);
};