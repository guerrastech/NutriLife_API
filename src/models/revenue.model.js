const mongoose = require('mongoose');


const revenuesScheme = mongoose.Schema({
    preference:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    img_url:{
        type: String,
        required: true
    },
})

const Revenues = mongoose.model("Revenues",revenuesScheme);

module.exports = Revenues;