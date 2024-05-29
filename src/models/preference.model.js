const mongoose = require('mongoose');


const preferenceScheme = mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    type:{
        type: Date,
        required: true
    },
    value:{
        type: String,
        required: true
    },
})

const Preference = mongoose.model("Preference",preferenceScheme);

module.exports = Preference;