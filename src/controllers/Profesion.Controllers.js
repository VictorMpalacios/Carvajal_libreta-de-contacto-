import { profesion } from "../models/Profesion.js"

export const getProfesiones = async (req, res) => {
    try {
        const profesiones = await profesion.findAll();
        res.json(profesiones);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getProfesion = async (req, res) => {
    try {
        const { id_profesion } = req.params;
        const profesiones = await profesion.findOne({
            where: {
                id_profesion,
            },
        });
        if (!profesiones) {

            return res.status(404).json({ message: 'ESA PROFESION NO EXISTE' });

        }
        res.json(profesiones);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
};

export const createProfesion = async (req, res) => {
    const { nombre_profesion } = req.body
    try {
        const newProfesion = await profesion.create({
            nombre_profesion,
        })
        res.json(newProfesion);
    } catch (error) {

        return res.status(500).json({ message: error.message });
    }
};

export const updateProfesion = async (req, res) => {
    try {
        const { id_profesion } = req.params
        const update = await profesion.findOne({
            where: {
                id_profesion
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

export const deleteProfesion = async (req, res) => {
    try {
        const { id_profesion } = req.params;

        const elim_profesion = await profesion.destroy({
            where: {
                id_profesion,
            },
        });
        if (!elim_profesion) {
            return res.status(404).json({ message: 'ESA PROFESIÓN NO EXISTE' });
        }
        console.log(elim_profesion)
        console.log('Se elimino el registro')
        res.sendStatus(204)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};