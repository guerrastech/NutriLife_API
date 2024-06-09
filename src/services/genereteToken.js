const jwt = require("jsonwebtoken");


const generateToken = (id) => jwt.sign({id: id}, process.env.JWT, {expiresIn: 86400});


module.exports = generateToken;