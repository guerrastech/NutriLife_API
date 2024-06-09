const express = require("express");
const Router = express.Router();
const {getUserById, getUser,createUser,updateUser,deleteUser} = require("../controllers/user.controller.js");
const {getMeal,createMeal,deleteMeal,updateMeal} = require("../controllers/meal.controller.js");
const {getAllRevenues,getRevenues,createRevenues,deleteRevenues,updateRevenues, getRevenueById} = require("../controllers/revenue.controller.js")
const login = require("../controllers/auth.controller.js");

Router.get("/users/get/", getUser);
Router.get("/users/get/:id", getUserById);
Router.post("/users/create/",createUser);
Router.put("/users/update/:id",updateUser);
Router.delete("/users/delete/:id",deleteUser);

Router.post("/users/auth/",login)

Router.get("/meals/get/:userId", getMeal);
Router.post("/meals/create/",createMeal);
Router.put("/meals/update/:id",updateMeal);
Router.delete("/meals/delete/:id",deleteMeal);


Router.get("/revenues/get/:preference",getRevenues);
Router.get("/revenues/get/",getAllRevenues);
Router.get("/revenues/get/id/:id",getRevenueById);
Router.post("/revenues/create",createRevenues);
Router.put("/revenues/update/:id",updateRevenues);
Router.delete("/revenues/delete/:id",deleteRevenues);


module.exports = Router;