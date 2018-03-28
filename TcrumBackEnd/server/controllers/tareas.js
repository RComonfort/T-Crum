const tareas = require('../models').tareas;

module.exports = {
  create(req, res) {
    return tareas
      .create({
        duracion: req.body.duracion,
        nombre: req.body.nombre,
        completado: req.body.completado,
        historia_de_usuario_id: req.body.historia_de_usuario_id,
      })
      .then(tareas => res.status(201).send(tareas))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return tareas
      .all()
      .then(tareas => res.status(200).send(tareas))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return tareas
      .findById(req.params.id, {
      })
      .then(tareas => {
        if (!tareas) {
          return res.status(404).send({
            message: 'Not Found',
          });
        }
        return res.status(200).send(tareas);
      })
      .catch(error => res.status(400).send(tareas));
  },
  update(req, res) {
    return tareas
      .findById(req.params.id, {
      })
      .then(tareas => {
        if (!tareas) {
          return res.status(404).send({
            message: 'Not Found',
          });
        }
        return tareas
          .update({
            duracion: req.body.duracion,
            nombre: req.body.nombre,
            completado: req.body.completado,
            historia_de_usuario_id: req.body.historia_de_usuario_id,
          })
          .then(() => res.status(200).send(tareas))  // Send back the updated tuple.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return tareas
      .findById(req.params.id)
      .then(tareas => {
        if (!tareas) {
          return res.status(400).send({
            message: 'Not Found',
          });
        }
        return tareas
          .destroy()
          .then(() => res.status(200).send({message: 'Eliminación exitosa.'}))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};