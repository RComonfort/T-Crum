const tareasController = require('../controllers').tareas;
const membersController = require('../controllers').members;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the TCRUM Project API!',
  }));

  //Routes for the MEMBERS table
  app.post('/api/members', membersController.create);
  app.get('/api/members', membersController.list);
  app.get('/api/members', membersController.retrieve);
  app.put('/api/members', membersController.update);
  app.delete('/api/members', membersController.destroy);

  //Routes for the TAREAS table
  app.post('/api/tareas', tareasController.create);
  app.get('/api/tareas', tareasController.list);
  app.get('/api/tareas/:id', tareasController.retrieve);
  app.put('/api/tareas/:id', tareasController.update);
  app.delete('/api/tareas/:id', tareasController.destroy);
};