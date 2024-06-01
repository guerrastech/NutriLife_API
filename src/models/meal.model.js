const mongoose = require('mongoose');


const mealScheme = mongoose.Schema({
    userId:{
        type: String,
        required: true
        },
    // date:{
    //     type: Date,
    //     required: true
    // },
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    calories: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: true
    }
})

const Meal = mongoose.model("Meal",mealScheme);

module.exports = Meal;