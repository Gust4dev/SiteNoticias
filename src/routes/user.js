// routes/user.js
import { Router } from "express";
import {
  criarUsuario,
  atualizarUsuario,
  listarUsuarios,
  excluirUsuario,
} from "../controllers/user";

const router = Router();

router.post("/", criarUsuario);
router.patch("/:id", atualizarUsuario);
router.get("/", listarUsuarios);
router.delete("/:id", excluirUsuario);

export default router;
