import { Router } from "express";
import { getEmpresa, getEmpresas, createEmpresa, deleteEmpresa, updateEmpresa } 
from "../controllers/Empresa.Controllers.js";

const router = Router();

router.get("/empresa",getEmpresas)
router.post("/empresa",createEmpresa)
router.put("/empresa/:id_empresa",updateEmpresa)
router.delete("/empresa/:id_empresa",deleteEmpresa)
router.get("/empresa/:id_empresa",getEmpresa)


export default router;
