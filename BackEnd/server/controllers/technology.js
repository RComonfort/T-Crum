const Technology = require('../models').Technologies;

module.exports = {
    create(req, res) {
       if(!req.body.name /*|| !Validation.isAValidName(req.body.name)*/)
			return res.status(400).send({message: 'The attribute name is invalid. It must match a value in the enum.'});

        return Technology
            .create({
                name: req.body.name
            })
            .then(technology => res.status(200).send(technology))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {

        return Technology
        .all()
        .then(technology => res.status(200).send(technology))
        .catch(error => res.status(400).send(error));
},

    retrieve(req, res) {

        // check that log_id is not null, undefined, not an integer or 0
        if(!req.body.id || !Numbers.isInteger(req.body.id)) { 
            return res.status(400).send({message: 'ID attribute can not be an empty field.'});
        }

        return Technology
            .findById(req.params.technology_id, {})
            .then(technology => {
                if(!technology) {
                    return res.status(404).send({ message: 'Technology not found.'});
                }
                return res.status(200).send(technology);
            })
            .catch(error => res.status(400).send(error));
},

 	update(req, res) {

        if (!req.params.id || !Numbers.isInteger(req.params.id))
            return res.status(400).send({message: 'ID attribute can not be an empty field.'});

        if(!req.body.name || !isAValidName(req.body.name))
            return res.status(400).send({message: 'The attribute name is invalid. It must match a value in the enum.'});


        return Technology
            .findById(req.params.id, {})
            .then(technology => {
                if (!technology) {
                    return res.status(400).send({
                    message: 'Technology not found',
                  });
                }

                return Technology
                    .update({
                        name: req.body.name
                    })

                    .then(() => res.status(200).send(technology))
                    .catch((error) => res.status(400).send(error));
            })

            .catch((error) => res.status(400).send(error));
    },
    
    destroy(req, res) {

        return Technology
            .findById(req.params.id)
            .then(technology => {
                if (!technology) {
                    return res.status(400).send({
                    message: 'Technology not found.',
                    });
                }
                
                return Technology
                  .destroy()
                  .then(() => res.status(200).send({message: 'Technology deleted successfully.'}))
                  .catch(error => res.status(400).send(error));
            })
            
        .catch(error => res.status(400).send(error));
    },
};