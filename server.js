const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const newsRoutes = require("./src/routes/newsRoutes");

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

const dbURI = process.env.DB_URI;

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Conexão com o MongoDB estabelecida com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error);
  });

// middlewares
app.use(express.json());
app.use("/news", newsRoutes);

// start server
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
