const Joi = require('joi');
const bcrypt = require('bcrypt');
const express = require('express');
const {User} = require('../models/userModel');
const router = express.Router();

//User Login
router.post('/', async (req, res) => {
    const { error } = validate(req.body); //joi validation
    if (error) return res.status(400).send(error.details[0].message);
    try{
        let user = await User.findOne({email:req.body.email});
        if(!user) return res.status(400).send('Invalid email or password');
    
        //Taking hash of password and comparing with the password stored in database
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword) return res.status(400).send('Invalid email or password');
    
        const token = user.generateAuthToken();
        //wrapping token in json object
        res.send({token:token});
    }
    catch(ex){
        res.status(500).send('Something failed!');
    }
});

//Validating login request
function validate(req){
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(30).required()
    });
    return schema.validate(req);
}

module.exports = router;   