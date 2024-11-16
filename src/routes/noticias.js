import { Router } from "express";
import { listarNoticias, criarNoticia } from "../controllers/noticias";

const router = Router();

router.get("/", listarNoticias);
router.post("/", criarNoticia);

export default router;
