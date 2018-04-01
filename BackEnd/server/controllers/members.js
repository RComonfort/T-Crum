const Member = require('../models').Member;

module.exports = {

    create(req, res) {
        return Member
            .create({
                id: req.body.id,
                deparment_major: req.body.department_major,
                name: req.body.name,
                photo_URL: req.body.photo_URL,
                password: req.body.password
            })
            .then(member => res.status(201).send(member))
            .catch(error => res.status(400).send(error));
    },

    list(req, res) {

        return Member
            .all()
            .then(members => res.status(200).send(members))
            .catch(error => res.status(400).send(error));
    },

    retrieve(req, res) {

        return Member
            .findById(req.params.memberId, {

                include: [{

                    model: Member,
                    as: 'members',
                }],
            })
            .then(member => {

                if(!member) {

                    return res.status(404).send({

                        message: 'Member Not Found',
                    });
                }

                return res.status(200).send(member);
            })
            .catch(error => res.status(404).send(error));
    },

    update(req, res){

        return Member
            .findById(req.params.memberId, {

                include: [{

                    model: Member,
                    as: 'member',
                }],
            })
            .then(member => {

                if(!member) {

                    return res.status(404).send({

                        message: 'Member Not Found',
                    });
                }

                return member
                    .update({

                        deparment_major: req.body.department_major || member.deparment_major,
                        name: req.body.name || member.name,
                        photo_URL: req.body.photo_URL || member.photo_URL,
                        password: req.body.password || member.password,
                    })
                    .then(() => res.status(200).send(member)) // Send back the updated member
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    destroy(req, res) {

        return Member
            .findById(req.params.memberId)
            .then(member => {

                if(!member) {

                    return res.status(400).send({

                        message: 'Member Not Found',
                    });
                }

                return member
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(4004).send(error));
    }
};