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
            .then(sprint => res.status(200).send(sprint))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {

        return Sprint
            .findAll({
                include: [
                    { model: UserStory, as: 'user_stories' }
                ]
            })
            .then(sprints => res.status(200).send(sprints))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {

        // check that sprint_id is not null
        if (!req.params.id) {
            return res.status(400).send({ message: 'ID attribute can not be an empty field.' });
        }

        return Sprint
            .findById(req.params.id, {
                include: [
                    { model: UserStory, as: 'user_stories' }
                ]
            })
            .then(sprint => {
                if (!sprint) {
                    return res.status(404).send({ message: 'Sprint not found.' });
                }
                return res.status(200).send(sprint);
            })
            .catch(error => res.status(400).send(error));
    },
    update(req, res) {

        if (!req.params.id)
            return res.status(400).send({ message: 'ID attribute can not be an empty field.' });

        if (!req.body.days)
            return res.status(400).send({ message: 'Days attribute must be a valid field.' });

        return Sprint
            .findById(req.params.id, {
                include: [
                    { model: UserStory, as: 'user_stories' }
                ]
            })
            .then(sprints => {
                if (!sprints) {
                    return res.status(400).send({
                        message: 'Sprint not found',
                    });
                }

                return Sprint
                    .update({
                        days: req.body.days,
                        comment: req.body.comment,
                    })

                    .then(() => res.status(200).send(sprints))
                    .catch((error) => res.status(400).send(error));
            })

            .catch((error) => res.status(400).send(error));
    },

    destroy(req, res) {

        return Sprint
            .findById(req.params.id, {
                include: [
                    { model: UserStory, as: 'user_stories' }
                ]
            })
            .then(sprints => {
                if (!sprints) {
                    return res.status(400).send({
                        message: 'Sprint not found.',
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