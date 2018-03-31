const Log = require('../models').Member;
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../services/jwt');

module.exports = {
    login(req, res) {
        // check that params are not null, undefined or empty string
        if(!req.body.member_id || !req.body.password){ 
            return res.status(400).send({message: 'The post body must contain a member_id and password field.'});
        }

        let member_id = body.member_id;
        let password = body.password;

        Member.findById( body.member)
        .then(member => {
            if(!member){
                res.status(400).send({ message: 'Authentication failed. Member not found.'});
            }

            bcrypt.compare(password, member.password, (error, check) => {
                if(check){
                    // devolver miembro y token
                    member.password = '';
                    res.status(200).send({
                        token: jwt.createToken(member),
                        member: member
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