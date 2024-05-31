const mongoose = require("mongoose");
const express = require("express");
const route = require("./src/routes/routes.js")
const PORT = 3000;


const app = express();

app.use(express.json());
app.use("/NutriLife/api",route)




mongoose
.connect(
    "mongodb+srv://gabrielguerra190803:OgSgnGR0NLYcwgVx@nutrilife.0v7i2l6.mongodb.net/"
)
.then(() => {
    console.log("Conectado ao banco de dados");
    app.listen(PORT, () => {
      console.log("Servidor ativo na porta 3000");
    });
  })
.catch(() => {
    console.log("Falha na conexão ao banco de dados!");
  });