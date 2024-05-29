const User = require("../models/user.model.js");

const getUser = async (req,res) => {
    try{
        const users = await User.find();

        if (!users || users.length === 0) {
            return res.status(404).json({ error: "Nenhum usuário encontrado" });
        }

        res.status(201).json(users);
    }catch(error){
        res.status(500).json({message: error.message})
    }
};


const createUser = async (req,res) => {
    try{
        const users = await User.create(req.body);
        res.status(200).json(users)
    }catch(error){
        res.status(500).json({message: error.message});
    }
};


const updateUser = async (req,res) => {
    try{
        const {id} = req.params;
        const users = await User.findByIdAndUpdate(id,req.body);

        const userUpdated = await User.findById(id);
        res.status(200).json(userUpdated);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

const deleteUser = async (req,res) => {
    try{
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.status(200).json({message: "Usuário excluído com sucesso !"});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
};
