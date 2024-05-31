const mongoose = require('mongoose');


const userScheme = mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    preferences:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

const User = mongoose.model("User",userScheme);

module.exports = User;