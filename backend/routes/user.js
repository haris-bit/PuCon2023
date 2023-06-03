const auth = require('../middleware/auth');
const bcrypt = require('bcrypt');
const express = require('express');
const _ = require('lodash');
const { User, validateUser } = require('../models/userModel');
const router = express.Router();


//User Registeration
router.post('/', [auth, admin], async (req, res) => {
    const { error } = validateUser(req.body); //joi validation
    if (error) return res.status(400).send(error.details[0].message);

    const user = new User(_.pick(req.body, ['fullName', 'email', 'password']));
    //Taking hash of password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    //Saving User in database
    try {
        await user.save();
        res.send(_.pick(user, ['_id', 'fullName', 'email']));
    }
    catch (err) {
        res.status(400).send(err.message);
        console.log(err.message);
    }
});


module.exports = router;    