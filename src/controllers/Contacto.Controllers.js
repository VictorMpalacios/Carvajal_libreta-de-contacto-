import { Contacto } from '../models/Contacto.js'

export const getContactos = async (req, res) => {
    try {
        const contactos = await Contacto.findAll();
        res.json(contactos);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
};

export const getContacto = async (req, res) => {
    try {
        const { id_contacto } = req.params;
        const contact = await Contacto.findOne({
            where: {
                id_contacto,
            },
        });
        if (!contact) {

            return res.status(404).json({ message: 'ESE CONTACTO NO EXISTE' });

        }
        res.json(contact);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
};

export const createContacto = async (req, res) => {
    try {
        const { correo, telefono, direccion, celular, idInformacion, idempresa, idprofesion } = req.body
        const newContacto = await Contacto.create({
            correo,
            telefono,
            direccion,
            celular,
            idInformacion,
            idempresa,
            idprofesion
        });
        res.json(newContacto);
    } catch (error) {

        return res.status(500).json({ message: error.message });
    }
};

export const updateContacto = async (req, res) => {
    try {
        const { id_contacto } = req.params
        const update = await Contacto.findOne({
            where: {
                id_contacto
            }
        });
        update.set(req.body)
        await update.save()
        return res.json(update)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const deleteContacto = async (req, res) => {
    try {
        const { id_contacto } = req.params;

        const elim_cont = await Contacto.destroy({
            where: {
                id_contacto,
            },
        });
        if (!elim_cont) {
            return res.status(404).json({ message: 'ESE CONTACTO NO EXISTE' });
        }
        console.log(elim_cont)
        console.log('Se elimino el registro')
        res.sendStatus(204)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};