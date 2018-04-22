const Driver = require('../models').Driver;
const Review = require('../models').Review;

module.exports = {
    create(req, res) {
        if (!req.body.password)
        return res.status(400).send({message: 'password attribute can not be empty.'});
        
        if (!req.body.first_name)
        return res.status(400).send({message: 'first name attribute can not be empty.'});

        if (!req.body.last_name)
        return res.status(400).send({message: 'last_name attribute can not be empty.'});

        if (!req.body.review_count)
        return res.status(400).send({message: 'review count attribute can not be empty.'});

        if (!req.body.review_avg)
        return res.status(400).send({message: 'review avg attribute can not be empty.'});

        if (!req.body.kindness_prize_count)
        return res.status(400).send({message: 'kindess prize count attribute can not be empty.'});

        if (!req.body.cleanliness_prize_count)
        return res.status(400).send({message: 'cleanliness prize count attribute can not be empty.'});

        if (!req.body.driving_skills_prize_count)
        return res.status(400).send({message: 'driving_skills_prize count attribute can not be empty.'});

        return Driver
            .create({
                password: req.body.password,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                review_count: req.body.review_count,
                review_avg: req.body.review_avg,
                kindness_prize_count: req.body.kindness_prize_count,
                cleanliness_prize_count: req.body.cleanliness_prize_count,
                driving_skills_prize_count: req.body.driving_skills_prize_count 
            })
            .then(Driver => res.status(200).send(Driver))
            .catch(error => res.status(400).send(error))

    },
    list(req, res){
        return Driver
            .findAll({
                include: [
                    {
                        model: Review,
                        as: 'review'
                    }
                ],
            })
            .then(Driver => res.status(200).send(Driver))
            .catch(error => res.status(400).send(error))

    },
    retrieve(req, res){
        if(!req.params.id && req.body.id === parseInt(req.body.id,10)) { 
            return res.status(400).send({message: 'The request must contain the parameter id field.'});
          }
        return Driver
          .findById(req.params.id, {
              include: [
                  { model: Review, as: 'review'},
              ],
          })
          .then(Driver => {
              if(!Driver) {
                  return res.status(400).send({
                      message: "Driver not found",
                  });
              }
              return res.status(200).send(Driver);
          })
          .catch(error => res.status(400).send(Driver));
    },
    update(req, res){

        if (!req.params.id || (req.params.id === parseInt(req.params.id,10)))
            return res.status(400).send({message: 'attribute id can not be empty and must be an integer.'});
        
        return Driver
            .findById(req.params.id, {
                include: [ { model: Review, as: 'review'}]
            })
            .then(Driver => {
                if (!Driver) {
                    return res.status(400).send({
                        message: 'Driver not found',
                    });
                }
                return Driver
                    .update({
                        password: req.body.password || Driver.password,
                        first_name: req.body.first_name || Driver.first_name,
                        last_name: req.body.last_name || Driver.last_name,
                        review_count: req.body.first_name || Driver.review_count,
                        review_avg: req.body.first_name || Driver.review_avg,
                        kindness_prize_count: req.body.first_name || Driver.kindness_prize_count,
                        cleanliness_prize_count: req.body.first_name || Driver.cleanliness_prize_count,
                        driving_skills_prize_count: req.body.first_name || Driver.driving_skills_prize_count,
                    })
                    .then( () => res.status(200).send(Driver))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error))
    },
    destroy(req, res) {
        return Driver
            .findById(req.params.id)
            .then(Driver => {
                if(!Driver) {
                    return res.status(400).send({
                        message: 'Driver not found',
                    });
                }
                return Driver
                    .destroy()
                    .then(() => res.status(200).send({message: 'Successful Delete YAY!.'}))
                    .catch(error => res.status(400).send(error))
            })
            .catch(error => res.status(400).send(error))
    },
};