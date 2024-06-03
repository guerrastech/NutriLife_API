const mongoose = require("mongoose");


const connectDatabase = () =>{

     mongoose.connect( process.env.MONGO_URI)

.then(() => {console.log("Conectado ao banco de dados")})

.catch((error) => {console.error("Erro ao conectar ao banco de dados:", error);});


};


module.exports = connectDatabase;

