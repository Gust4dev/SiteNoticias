import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import newsRoutes from "./src/routes/noticias.js";
import userRoutes from "./src/routes/user.js";
import userPrefRoutes from "./src/routes/userpref.js";

// Importação das rotas
const newsRoutes = require("./src/routes/newsRoutes");
const userRoutes = require("./src/routes/userRoutes");
const userPrefRoutes = require("./src/routes/userPrefRoutes");

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

// Middlewares
app.use(express.json());

// Verificação de rotas existentes
app.use((req, res, next) => {
  console.log(`Nova requisição: ${req.method} ${req.url}`);
  next();
});

// Rotas
app.use("/news", newsRoutes);
app.use("/users", userRoutes);
app.use("/userprefs", userPrefRoutes);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
