const authMiddleware = require('../middlewares/authentication');

const tasksController = require('../controllers').tasks;
const logsController = require('../controllers').logs;
const sprintsController = require('../controllers').sprints;
const membersController = require('../controllers').members;
const acceptance_criteriaController = require('../controllers').acceptance_criteria;
const member_taskController = require('../controllers').member_task;
const member_projectController = require('../controllers').member_project;
const projectsController = require('../controllers').projects;
const project_technologyController = require('../controllers').project_technology;
const userStoriesController = require('../controllers').user_stories;
const authenticationController = require('../controllers').authentication;
const technologiesController = require('../controllers').technology;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the TCRUM Project API!',
  }));

  //Autentication routes
  app.post('/api/login', authenticationController.login);

  //Routes for the TASKS table
  app.post('/api/tasks', authMiddleware.ensureAuth, tasksController.create);  
  app.get('/api/tasks', authMiddleware.ensureAuth, tasksController.list);
  app.get('/api/tasks-members/:id', authMiddleware.ensureAuth, tasksController.listTaskWithUsers);
  app.get('/api/tasks/:id', authMiddleware.ensureAuth, tasksController.retrieve);
  app.put('/api/tasks/:id', authMiddleware.ensureAuth, tasksController.update);
  app.delete('/api/tasks/:id', authMiddleware.ensureAuth, tasksController.destroy);

  //Routes for the LOGS table
  app.post('/api/logs', authMiddleware.ensureAuth, logsController.create);  
  app.get('/api/logs', authMiddleware.ensureAuth, logsController.list);
  app.get('/api/logs/:id', authMiddleware.ensureAuth, logsController.retrieve);

  //Routes fot the SPRINTS table
  app.post('/api/sprints', authMiddleware.ensureAuth, sprintsController.create);  
  app.get('/api/sprints', authMiddleware.ensureAuth, sprintsController.list);
  app.get('/api/sprints/:id', authMiddleware.ensureAuth, sprintsController.retrieve);
  app.put('/api/sprints/:id', authMiddleware.ensureAuth, sprintsController.update);
  app.delete('/api/sprints/:id', authMiddleware.ensureAuth, sprintsController.destroy);

  //Routes for the MEMBERS table
  app.post('/api/members', membersController.create);
  app.get('/api/members', authMiddleware.ensureAuth, membersController.list);
  app.get('/api/members/:id', authMiddleware.ensureAuth, membersController.retrieve);
  app.put('/api/members/:id', authMiddleware.ensureAuth, membersController.update);
  app.delete('/api/members/:id', authMiddleware.ensureAuth, membersController.destroy);

  //Routes for the Project table
  app.post('/api/projects', authMiddleware.ensureAuth, authMiddleware.ensureRoot, projectsController.create);  
  app.get('/api/projects', authMiddleware.ensureAuth, projectsController.list);
  app.get('/api/projects/:id', authMiddleware.ensureAuth, projectsController.retrieve);
  app.put('/api/projects/:id', authMiddleware.ensureAuth, authMiddleware.ensureRoot, projectsController.update);
  app.delete('/api/projects/:id', authMiddleware.ensureAuth, authMiddleware.ensureRoot, projectsController.destroy);
  
  //Routes for the ACCEPTANCE_CRITERIA table
  app.post('/api/acceptance-criteria', authMiddleware.ensureAuth, acceptance_criteriaController.create);  
  app.get('/api/acceptance-criteria', authMiddleware.ensureAuth, acceptance_criteriaController.list);
  app.get('/api/acceptance-criteria/:id', authMiddleware.ensureAuth, acceptance_criteriaController.retrieve);
  app.put('/api/acceptance-criteria/:id', authMiddleware.ensureAuth, acceptance_criteriaController.update);
  app.delete('/api/acceptance-criteria/:id', authMiddleware.ensureAuth, acceptance_criteriaController.destroy);

  //Routes for the MEMBER_TASK table
  app.post('/api/member-task', authMiddleware.ensureAuth, member_taskController.create);  
  app.get('/api/member-task', authMiddleware.ensureAuth, member_taskController.list);
  app.get('/api/member-task/:id', authMiddleware.ensureAuth, member_taskController.retrieve);
  app.put('/api/member-task/:id', authMiddleware.ensureAuth, member_taskController.update);
  app.delete('/api/member-task/:id', authMiddleware.ensureAuth, member_taskController.destroy);

  //Routes for the MEMBER_PROJECT table
  app.post('/api/member-project', authMiddleware.ensureAuth, member_projectController.create);  
  app.get('/api/member-project', authMiddleware.ensureAuth, member_projectController.list);
  app.get('/api/member-project/:id', authMiddleware.ensureAuth, member_projectController.retrieve);
  app.put('/api/member-project/:id', authMiddleware.ensureAuth, member_projectController.update);
  app.delete('/api/member-project/:id', authMiddleware.ensureAuth, member_projectController.destroy);

  //Routes for the PROJECT_TECHNOLOGY table
  app.post('/api/project-technology', authMiddleware.ensureAuth, authMiddleware.ensureRoot, project_technologyController.create);  
  app.get('/api/project-technology', authMiddleware.ensureAuth, project_technologyController.list);
  app.get('/api/project-technology/:id', authMiddleware.ensureAuth, project_technologyController.retrieve);
  app.put('/api/project-technology/:id', authMiddleware.ensureAuth, authMiddleware.ensureRoot, project_technologyController.update);
  app.delete('/api/project-technology/:id', authMiddleware.ensureAuth, authMiddleware.ensureRoot, project_technologyController.destroy);

  //Routes for the USER_STORIES table
  app.post('/api/user-stories', authMiddleware.ensureAuth, userStoriesController.create);  
  app.get('/api/user-stories', authMiddleware.ensureAuth, userStoriesController.list);
  app.get('/api/user-stories/:id', authMiddleware.ensureAuth, userStoriesController.retrieve);
  app.put('/api/user-stories/:id', authMiddleware.ensureAuth, userStoriesController.update);
  app.delete('/api/user-stories/:id', authMiddleware.ensureAuth, userStoriesController.destroy);
  
  //Routes for the TECHNOLOGIES table
  app.post('/api/technologies', authMiddleware.ensureAuth, technologiesController.create);  
  app.get('/api/technologies', authMiddleware.ensureAuth, technologiesController.list);
  app.get('/api/technologies/:id', authMiddleware.ensureAuth, technologiesController.retrieve);
  app.put('/api/technologies/:id', authMiddleware.ensureAuth, technologiesController.update);
  app.delete('/api/technologies/:id', authMiddleware.ensureAuth, technologiesController.destroy);
};