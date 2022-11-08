import { data } from "../models/Data.js"
import { contacto } from '../models/Contacto.js'


export const getDatacontacts = async (req, res) => {
    try {
        const datas = await data.findAll();
        res.json(datas);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getDatacontact = async (req, res) => {
    try {
        const { id_data } = req.params;
        const datas = await data.findOne({
            where: {
                id_data,
            },
        });
        if (!datas) {

            return res.status(404).json({ message: 'ESE CONTACTO NO EXISTE' });

        }
        res.json(datas);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
};

export const createDatacontact = async (req, res) => {
    const { nombre, apellido } = req.body
    try {
        const newData = await data.create({
            nombre,
            apellido
        });

        res.json(newData);
    } catch (error) {

        return res.status(500).json({ message: error.message });
    }
};

export const updateDatacontact = async (req, res) => {
    try {
        const { id_data } = req.params
        const update = await data.findOne({
            where: {
                id_data
            }
        });
        update.set(req.body)
        await update.save()
        return res.json(update)
        console.log(update);
        res.json(update);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

};

export const deleteDatacontact = async (req, res) => {
    try {
        const { id_data } = req.params;

        const elim_data = await data.destroy({
            where: {
                id_data,
            },
        });
        if (!elim_data) {
            return res.status(404).json({ message: 'ESE CONTACTO NO EXISTE' });
        }
        console.log(elim_data)
        console.log('Se elimino el registro')
        res.sendStatus(204)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

export const getContactoydata = async (req, res) => {
    try {
        const { id_data } = req.params;
        const contact = await contacto.findAll({
            where: {
                idInformacion: id_data
            },
        });
        if (!contact) {
            return res.status(404).json({ message: 'ESE CONTACTO NO EXISTE' });
        }
        console.log(contact)
        res.sendStatus(204)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};