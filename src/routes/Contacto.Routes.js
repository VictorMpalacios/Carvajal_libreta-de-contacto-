import { Router } from 'express'
import { getContacto, createContacto, deleteContacto, updateContacto, getContactos } from '../controllers/Contacto.Controllers.js'

const router = Router()


router.get("/contacto", getContactos)
router.post("/contacto", createContacto)
router.put("/contacto/:id_contacto", updateContacto)
router.delete("/contacto/:id_contacto", deleteContacto)
router.get("/contacto/:id_contacto", getContacto)

export default router