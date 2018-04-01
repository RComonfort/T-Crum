const tasksController = require('../controllers').tasks;
const logsController = require('../controllers').logs;
const sprintsController = require('../controllers').sprints;
const membersController = require('../controllers').members;
const acceptance_criteriaController = require('../controllers').acceptance_criteria;
const member_taskController = require('../controllers').member_task;
const member_projectController = require('../controllers').member_project;
const project_technologyController = require('../controllers').project_technology;


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the TCRUM Project API!',
  }));

  //Routes for the TASKS table
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

  //Routes for the MEMBERS table
  app.post('/api/members', membersController.create);
  app.get('/api/members', membersController.list);
  app.get('/api/members', membersController.retrieve);
  app.put('/api/members', membersController.update);
  app.delete('/api/members', membersController.destroy);

  //Routes for the Project table
  app.post('/api/projects', tareasController.create);  
  app.get('/api/projects', tareasController.list);
  app.get('/api/projects/:id', tareasController.retrieve);
  app.put('/api/projects/:id', tareasController.update);
  app.delete('/api/projects/:id', tareasController.destroy);
  
  //Routes for the ACCEPTANCE_CRITERIA table
  app.post('/api/acceptance-criteria', acceptance_criteriaController.create);  
  app.get('/api/acceptance-criteria', acceptance_criteriaController.list);
  app.get('/api/acceptance-criteria/:id', acceptance_criteriaController.retrieve);
  app.put('/api/acceptance-criteria/:id', acceptance_criteriaController.update);
  app.delete('/api/acceptance-criteria/:id', acceptance_criteriaController.destroy);

  //Routes for the MEMBER_TASK table
  app.post('/api/member-task', member_taskController.create);  
  app.get('/api/member-task', member_taskController.list);
  app.get('/api/member-task/:id', member_taskController.retrieve);
  app.put('/api/member-task/:id', member_taskController.update);
  app.delete('/api/member-task/:id', member_taskController.destroy);

  //Routes for the MEMBER_PROJECT table
  app.post('/api/member-project', member_projectController.create);  
  app.get('/api/member-project', member_projectController.list);
  app.get('/api/member-project/:id', member_projectController.retrieve);
  app.put('/api/member-project/:id', member_projectController.update);
  app.delete('/api/member-project/:id', member_projectController.destroy);

  //Routes for the PROJECT_TECHNOLOGY table
  app.post('/api/project-technology', project_technologyController.create);  
  app.get('/api/project-technology', project_technologyController.list);
  app.get('/api/project-technology/:id', project_technologyController.retrieve);
  app.put('/api/project-technology/:id', project_technologyController.update);
  app.delete('/api/project-technology/:id', project_technologyController.destroy);
};