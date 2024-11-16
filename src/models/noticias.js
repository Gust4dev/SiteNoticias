const mongoose = require("mongoose");

const NoticiaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  conteudo: { type: String, required: true },
  dataPublicacao: { type: Date, required: true },
  resumo: { type: String, required: true },
  categoria: { type: String, required: true },
});

module.exports = mongoose.model("Noticia", NoticiaSchema);
