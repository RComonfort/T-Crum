const Log = require('../models').Log;

module.exports = {
    create(req, res) {
        // check that params are not null, undefined or empty string
        if(!req.body.query){ 
            return res.status(400).send({message: 'El atributo query no puede estar vacio.'});
        }

        if(!req.body.miembro_matricula){
            return res.status(400).send({message: 'El atributo miembro_matricula no puede estar vacio.'});
        }

        return Log
            .create({
                query: req.body.query,
                miembro_matricula: req.body.miembro_matricula
            })
            .then(log => res.status(201).send(log))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Log
            .findAll({
                include: [{
                    model: Miembro,
                    as: 'miembro'
                }],
            })
            .then(logs => res.status(200).send(logs))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {
        // check that log_id is not null, undefined, not an integer or 0
        if(!req.body.id || !Numbers.isInteger(res.body.id)) { 
            return res.status(400).send({message: 'El parametro log_id no puede estar vacio.'});
        }

        return Log
            .findById(req.params.log_id, {
                include: [{
                    model: Miembro,
                    as: 'miembro'
                }],
            })
            .then(log => {
                if(!log) {
                    return res.status(404).send({ message: 'Log not found.'});
                }
                return res.status(200).send(log);
            })
            .catch(error => res.status(400).send(error));
    }
};