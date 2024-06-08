const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userScheme = mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    preferences:{
        type: [String],
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
})


userScheme.pre("save", async function (next){
    this.password = await bcrypt.hash(this.password, 10);
    next();
});


const User = mongoose.model("User",userScheme);

module.exports = User;