import { Router } from "express";
import { getDatacontact, getDatacontacts, createDatacontact, deleteDatacontact, updateDatacontact,getContactoydata } 
from "../controllers/Datacontact.Controllers.js";

const router = Router();

router.get("/datacontac",getDatacontacts)
router.post("/datacontac",createDatacontact)
router.put("/datacontac/:id_data",updateDatacontact)
router.delete("/datacontac/:id_data",deleteDatacontact)
router.get("/datacontac/:id_data",getDatacontact)

router.get("/datacontac/:id_data/contacto",getContactoydata)


export default router;
