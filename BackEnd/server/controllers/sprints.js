const Sprint = require('../models').Sprint;
const UserStory = require('../models').User_story;

module.exports = {
    create(req, res) {
        if (!req.body.days) {
            return res.status(400).send({ message: 'Days attribute can not be an empty field.' });
        }

        return Sprint
            .create({
                days: req.body.days,
                comment: req.body.comment
            })
            .then(Sprint => res.status(200).send(Sprint))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {

        return Sprint
            .findAll({
                include: [
                    { model: UserStory, as: 'user_stories' }
                ]
            })
            .then(Sprints => res.status(200).send(Sprints))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {

        // check that Sprint_id is not null
        if (!req.params.id) {
            return res.status(400).send({ message: 'ID attribute can not be an empty field.' });
        }

        return Sprint
            .findById(req.params.id, {
                include: [
                    { model: UserStory, as: 'user_stories' }
                ]
            })
            .then(Sprint => {
                if (!Sprint) {
                    return res.status(404).send({ message: 'Sprint not found.' });
                }
                return res.status(200).send(Sprint);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {

        // If user is passing days parameter, we have to validate that it is a positive number
        if (req.body.days && !req.body.days === parseInt(req.body.days, 10))
            return res.status(400).send(
                { message: 'Days attribute must be a valid field' }
            );

        return Sprint
            .findById(req.params.id, {})
            .then(Sprint => {

                if (!Sprint) {

                    return res.status(404).send({

                        message: 'Sprint Not Found',
                    });
                }

                return Sprint
                    .update({

                        days: req.body.days || Sprint.days,
                        comment: req.body.comment || Sprint.comment,
                    })
                    .then(() => res.status(200).send(Sprint)) // Send back the updated member
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    destroy(req, res) {

        return Sprint
            .findById(req.params.id, {})
            .then(Sprint => {

                if (!Sprint) {

                    return res.status(404).send({

                        message: 'Sprint Not Found',
                    });
                }

                return Sprint
                    .destroy()
                    .then(() => res.status(200).send({ message: 'Sprint deleted successfully.' }))
                    .catch(error => res.status(400).send(error));
            })

            .catch(error => res.status(400).send(error));
    },
};