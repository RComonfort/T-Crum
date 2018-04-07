const Project = require('../models').Project;
const User_story = require('../models').User_story;
const Member = require('../models').Member;

module.exports = {
    create(req, res) {
        // check that params are not null, undefined or empty string
        if(!req.body.vision){ 
            return res.status(400).send({message: 'Attribute vision cannot be empty'});
        }
        if(!req.body.name){ 
            return res.status(400).send({message: 'Attribute name cannot be empty'});
        }
        if(!req.body.begin_date){ 
            return res.status(400).send({message: 'Attribute begin date cannot be empty'});
        }
        if(!req.body.end_date){ 
            return res.status(400).send({message: 'Attribute end date cannot be empty'});
        }

        var begin = new Date(req.body.begin_date);
        var end = new Date(req.body.end_date);

        if( begin > end){ 
            return res.status(400).send({message: 'End date cannot be before begin date'});
        }
        if(!req.body.background){ 
            return res.status(400).send({message: 'Attribute background cannot be empty'});
        }
        if(!req.body.risks){ 
            return res.status(400).send({message: 'Attribute risks cannot be empty'});
        }
        if(!req.body.reach){ 
            return res.status(400).send({message: 'Attribute reach cannot be empty'});
        }
        if(!req.body.scrum_master_id){
            return res.status(400).send({message: 'Attribute reach cannot be empty'});
        }
        return Project
            .create({
                vision: req.body.vision,
                name: req.body.name,
                begin_date: req.body.begin_date,
                end_date: req.body.end_date,
                background: req.body.background,
                risks: req.body.risks,
                reach: req.body.reach,
                scrum_master_id: req.body.scrum_master_id
            })
            .then(Project => res.status(200).send(Project))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {
        return Project
            .findAll({
                include: [
                    {model: User_story,
                    as: 'user_stories'},
                    {model: Member,
                    as: 'member'},
                    //{model: Member,
                    //as: 'members'}
                ],
                attributes : ['id', 'vision', 'name', 'begin_date', 'end_date', 'background', 'risks', 'reach', 'createdAt', 'updatedAt', 'scrum_master_id']
            })
            .then(projects => res.status(200).send(projects))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {
        // check that project id is not null, undefined, not an integer or 0
        if(!req.body.id || !Numbers.isInteger(req.body.id)) { 
            return res.status(400).send({message: 'ID must be an integer bigger than 0'});
        }

        return Project
            .findById(req.params.id, {
                attributes : ['id', 'vision', 'name', 'begin_date', 'end_date', 'background', 'risks', 'reach', 'createdAt', 'updatedAt', 'scrum_master_id']
            })
            .then(Project => {
                if(!Project) {
                    return res.status(400).send({ message: 'Project not found.'});
                }
                return res.status(200).send(Project);
            })
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        // check that params are not null, undefined or empty string
        if(!req.body.vision){ 
            return res.status(400).send({message: 'Attribute vision cannot be empty'});
        }
        if(!req.body.name){ 
            return res.status(400).send({message: 'Attribute name cannot be empty'});
        }
        if(!req.body.begin_date){ 
            return res.status(400).send({message: 'Attribute begin date cannot be empty'});
        }
        if(!req.body.end_date){ 
            return res.status(400).send({message: 'Attribute end date cannot be empty'});
        }

        var begin = new Date(req.body.begin_date);
        var end = new Date(req.body.end_date);

        if( begin > end){
            return res.status(400).send({message: 'End date cannot be before begin date'});
        }
        if(!req.body.background){ 
            return res.status(400).send({message: 'Attribute background cannot be empty'});
        }
        if(!req.body.risks){ 
            return res.status(400).send({message: 'Attribute risks cannot be empty'});
        }
        if(!req.body.reach){ 
            return res.status(400).send({message: 'Attribute reach cannot be empty'});
        }
        if(!req.body.scrum_master_id){
            return res.status(400).send({message: 'Attribute reach cannot be empty'});
        }
        return Project
            .findById(req.params.id, {
                attributes : ['id', 'vision', 'name', 'begin_date', 'end_date', 'background', 'risks', 'reach', 'createdAt', 'updatedAt', 'scrum_master_id']
            })
            .then(Project => {
                if (!Project) {
                return res.status(400).send({
                    message: 'Not Found',
                });
                }
                return Project
                .update({
                    vision: req.body.vision,
                    name: req.body.name,
                    begin_date: req.body.begin_date,
                    end_date: req.body.end_date,
                    background: req.body.background,
                    risks: req.body.risks,
                    reach: req.body.reach,
                    scrum_master_id: req.body.scrum_master_id
                })
                .then(() => res.status(200).send(Project))  // Send back the updated tuple.
                .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    destroy(req, res) {
        return Project
            .findById(req.params.id)
            .then(Project => {
                if (!Project) {
                    return res.status(400).send({
                        message: 'Not Found',
                    });
                }
                return Project
                .destroy()
                .then(() => res.status(200).send({message: 'Project deleted'}))
                .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },
};