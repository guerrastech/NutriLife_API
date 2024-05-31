const express = require("express");
const Router = express.Router();
const {getUser,createUser,updateUser,deleteUser} = require("../controllers/user.controller.js")


Router.get("/users/get/", getUser);
Router.post("/users/create/",createUser);
Router.delete("/users/delete/:id",deleteUser);
Router.put("/users/update/:id",updateUser);

module.exports = Router;