const mongoose = require("mongoose");

const PreferenciaUsuarioSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  categorias: { type: [String], required: true },
  frequenciaResumos: {
    type: String,
    enum: ["diario", "semanal", "mensal"],
    required: true,
  },
  criadoEm: { type: Date, default: Date.now },
});

module.exports = mongoose.model("PreferenciaUsuario", PreferenciaUsuarioSchema);
