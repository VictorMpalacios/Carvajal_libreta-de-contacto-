import { Router } from "express";
import { getProfesion, getProfesiones, createProfesion, deleteProfesion, updateProfesion } 
from "../controllers/Profesion.Controllers.js";

const router = Router();

router.get("/profesion",getProfesiones)
router.post("/profesion",createProfesion)
router.put("/profesion/:id_profesion",updateProfesion)
router.delete("/profesion/:id_profesion",deleteProfesion)
router.get("/profesion/:id_profesion",getProfesion)


export default router;
