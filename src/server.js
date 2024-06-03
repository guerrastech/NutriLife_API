const express = require("express");
const swaggerUI = require("swagger-ui-express");
const dotEnv = require("dotenv");

const connectDatabase = require("./database/mongo.database.js")
const swaggerDocs = require("../swaggerConfig/swagger.json");
const route = require("./routes/routes.js");
const PORT = process.env.PORT || 3000;

dotEnv.config();
const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
connectDatabase();
app.use(express.json());
app.use("/NutriLife/api",route);

app.listen(PORT, () => console.log(`servidor rodando na porta: ${PORT}`));



