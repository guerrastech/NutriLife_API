const bcrypt = require ("bcrypt");
const User = require("../models/user.model");


const login  = async (req,res) => {
    try{
        const {email , password} = req.body;

        const user = await loginService(email);

        if(!user){
            console.error("email ou senha incorreta", error);
            res.status(400).json({ message: error.message });
        }


        const passwordIsValid = await bcrypt.compare(password,user.password)

        if(!passwordIsValid){
            console.error("email ou senha incorreta", error);
            res.status(400).json({ message: error.message });
        }

        
        res.status(200).send(user)
    
    }catch(error){
        console.error("usuário não encontardo", error);
        res.status(500).json({ message: error.message });
    } 
    
}


const loginService = (email) => 
    User.findOne({email: email}).select("+password");


module.exports = login