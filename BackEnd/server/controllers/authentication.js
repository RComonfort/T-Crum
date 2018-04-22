const Passenger = require('../models').Passenger;
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../services/jwt');

module.exports = {
    login(req, res) {
        // check that params are not null, undefined or empty string
        if(!req.body.passenger_id || !req.body.password){ 
            return res.status(400).send({message: 'The post body must contain a passenger_id and password field.'});
        }
        
        let passenger_id = (String)(req.body.passenger_id).toLocaleLowerCase();
        let password = req.body.password;

        Passenger.findById(passenger_id)
        .then(passenger => {
            if(!passenger){
                res.status(400).send({ message: 'Authentication failed. Passenger not found.'});
            }

            bcrypt.compare(password, passenger.password, (error, check) => {
                if(check){
                    // devolver miembro y token
                    let data = jwt.createToken(passenger);
                    passenger.password = '';
                    
                    res.status(200).send({
                        token: data.token,
                        passenger: passenger,
                        expirationTime: data.expirationTime
                    });
                }
                else{
                    res.status(400).send({ message: 'Incorrect password.'});
                }
            });
        })
        .catch( error => res.status(400).send({ message: 'Request error.' }));
    }
};