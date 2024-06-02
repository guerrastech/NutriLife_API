const Revenue = require("../models/revenue.model.js");

const getAllRevenues = async (req,res) => {
    try{
        const renevues = await Revenue.find();
        
        res.status(200).json(renevues);

    }catch(error){
        console.error("Erro ao obter receitas:", error);
        res.status(500).json({ message: error.message });
    }
}

const getRevenues = async (req,res) => {
    try{
        const {preference} = req.params;

        const renevues = await Revenue.find({ preference: preference });
        
        res.status(200).json(renevues);

    }catch(error){
        console.error("Erro ao obter receitas:", error);
        res.status(500).json({ message: error.message });
    }
}

const createRevenues = async (req,res) => {
    try{
        const revenues = await Revenue.create(req.body);
        res.status(200).json(revenues)
    }catch(error){
        console.error("Erro ao obter receitas:", error);
        res.status(500).json({ message: error.message });
    }
}

const deleteRevenues = async (req,res) => {
    try{
        const { id } = req.params;
        
        await Revenue.findByIdAndDelete(id);

        res.status(200).json({message: "Receitas excluída com sucesso"})
    }catch(error){
        console.error("Erro ao excluir receitas:", error);
        res.status(500).json({ message: error.message });
    }
}

const updateRevenues = async (req,res) => {
    try{
        const { id } = req.params;

        const updatedRevenues = await Revenue.findByIdAndUpdate(id,req.body, {new : true});

        res.status(200).json(updatedRevenues);
    }catch(error){
        console.error("Erro ao atualizar a receita:", error);
        res.status(500).json({ message: error.message });
    }
}




module.exports= {
    getAllRevenues,
    getRevenues,
    createRevenues,
    deleteRevenues,
    updateRevenues
}