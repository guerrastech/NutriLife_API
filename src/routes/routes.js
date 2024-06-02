const express = require("express");
const Router = express.Router();
const {getUser,createUser,updateUser,deleteUser} = require("../controllers/user.controller.js");
const {getMeal,createMeal,deleteMeal,updateMeal} = require("../controllers/meal.controller.js");
const {getAllRevenues,getRevenues,createRevenues,deleteRevenues,updateRevenues} = require("../controllers/revenue.controller.js")

Router.get("/users/get/", getUser);
Router.post("/users/create/",createUser);
Router.delete("/users/delete/:id",deleteUser);
Router.put("/users/update/:id",updateUser);


Router.get("/meals/get/:userId", getMeal);
Router.post("/meals/create/",createMeal);
Router.delete("/meals/delete/:id",deleteMeal);
Router.put("/meals/update/:id",updateMeal);

Router.get("/revenues/get/:preference",getRevenues)
Router.get("/revenues/get/",getAllRevenues)
Router.post("/revenues/create",createRevenues)
Router.delete("/revenues/delete/:id",deleteRevenues)
Router.put("/revenues/update/:id",updateRevenues)

module.exports = Router;