const tasks = require('../models').Task;

module.exports = {
  create(req, res) {

    if (!req.body.duration)
      return res.status(400).send({message: 'El atributo duration no puede estar vacio.'});

    if (!req.body.name)
      return res.status(400).send({message: 'El atributo name no puede estar vacio.'});

    if (!req.body.completed)
      return res.status(400).send({message: 'El atributo completed no puede estar vacio.'});

    if (!req.body.user_story_id)
      return res.status(400).send({message: 'El atributo user_story_id no puede estar vacio.'});


    return tasks
      .create({
        duration: req.body.duration,
        name: req.body.name,
        completed: req.body.completed,
        user_story_id: req.body.user_story_id,
      })
      .then(tasks => res.status(200).send(tasks))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return tasks
      .all()
      .then(tasks => res.status(200).send(tasks))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return tasks
      .findById(req.params.id, {
        include: [{
          model: User_story,
          as: 'User_story'
        }],
      })
      .then(tasks => {
        if (!tasks) {
          return res.status(400).send({
            message: 'Task not found',
          });
        }
        return res.status(200).send(tasks);
      })
      .catch(error => res.status(400).send(tasks));
  },
  update(req, res) {

    if (!req.params.id || !Numbers.isInteger(res.params.id))
      return res.status(400).send({message: 'El atributo id no puede estar vacio y debe ser un numero entero.'});

    if (!req.body.duration)
      return res.status(400).send({message: 'El atributo duration no puede estar vacio.'});

    if (!req.body.name)
      return res.status(400).send({message: 'El atributo name no puede estar vacio.'});

    if (!req.body.completed)
      return res.status(400).send({message: 'El atributo completed no puede estar vacio.'});

    if (!req.body.user_story_id || !Numbers.isInteger(res.body.user_story_id))
      return res.status(400).send({message: 'El atributo user_story_id no puede estar vacio y debe ser un numero entero.'});

    return tasks
      .findById(req.params.id, {
      })
      .then(tasks => {
        if (!tasks) {
          return res.status(400).send({
            message: 'Task not found',
          });
        }
        return tasks
          .update({
            duration: req.body.duration,
            name: req.body.name,
            completed: req.body.completed,
            user_story_id: req.body.user_story_id,
          })
          .then(() => res.status(200).send(tasks))  // Send back the updated tuple.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return tasks
      .findById(req.params.id)
      .then(tasks => {
        if (!tasks) {
          return res.status(400).send({
            message: 'Task not found',
          });
        }
        return tasks
          .destroy()
          .then(() => res.status(200).send({message: 'Eliminación exitosa.'}))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};