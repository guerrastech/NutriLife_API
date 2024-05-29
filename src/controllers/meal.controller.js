const Meal = require ('../models/meal.model.js');


const getMeal = async (req, res) => {
    try {
        const { userId } = req.params;

         const meals = await Meal.find({ userId: userId });

        if (!meals || meals.length === 0) {
            return res.status(404).json({ error: "Nenhuma refeição encontrada" });
        }

        res.status(200).json(meals);
    } catch (error) {
        console.error("Erro ao obter refeição:", error);
        res.status(500).json({ message: error.message });
    }
}


const createMeal = async (req, res) => {
    try {
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({ error: "ID do usuário é obrigatório." });
        }

        const meals = await Meal.create(req.body);
        res.status(200).json(meals);

    } catch (error) {
        console.error("Erro ao obter refeição:", error);
        res.status(500).json({ message: error.message });
    }
}


const deleteMeal = async (req, res) => {
    try {
        const { id } = req.params;
        
        await Meal.findByIdAndDelete(id);
        
        res.status(200).json({ message: "Refeição excluída com sucesso" });
    } catch(error) {
        console.error("Erro ao excluir refeição:", error);
        res.status(500).json({ message: error.message });
    }
}

const updateMeal = async (req, res) => {
    try {
        const { id } = req.params;
        
        const updatedMeal = await Meal.findByIdAndUpdate(id, req.body, { new: true });
        
        res.status(200).json(updatedMeal);
    } catch (error) {
        console.error("Erro ao atualizar a refeição:", error);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getMeal,
    createMeal,
    deleteMeal,
    updateMeal
};

