const mongoose = require("mongoose");
const express = require("express");
const Router = require()

const app = express();

app.use(express.json());
app.use("/NutriLife/api",router)

app.listen(3000, () => {
    console.log('Servidor ativo na porta 3000')
})
