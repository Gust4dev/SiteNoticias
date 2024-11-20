// routes/userpref.js
import { Router } from "express";
import {
  criarPreferencias,
  atualizarPreferencias,
  listarPreferencias,
  excluirPreferencias,
} from "../controllers/userpref";

const router = Router();

router.post("/", criarPreferencias);
router.patch("/:id", atualizarPreferencias);
router.get("/", listarPreferencias);
router.delete("/:id", excluirPreferencias);

export default router;
