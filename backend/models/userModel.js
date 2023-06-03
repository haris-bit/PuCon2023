const _ = require('lodash');
const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const Joi = require('joi');

/**
 * The object represents schema for users.
 * All fields are validated using Mongoose 
 */
const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        maxLength: 40
    },
    email: {
        type: String,
        required: true,
        email: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength:8,
        maxLength:1024
    },
})


//Generating Authorization token for login
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign(_.pick(this,['_id','fullName','email']), config.get('jwtPrivateKey'));
    return token;
}

/**
 * The function validates user object by
 *  using Joi.
 * @param {Object} user indicates user
 *  to be validated
 * @returns an object having two properties;
 * value and error
 */
function validateUser(user){
    const schema = Joi.object({
        fullName: Joi.string().max(40).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(20).required(),
    });
    return schema.validate(user);
}





//exporting modules
module.exports.User=new mongoose.model("users", userSchema);
module.exports.validateUser=validateUser;
