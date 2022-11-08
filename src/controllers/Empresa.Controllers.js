import { Empresa } from "../models/Empresa.js"

export const getEmpresas = async (req, res) => {
    try {
        const empresas = await Empresa.findAll();
        res.json(empresas);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getEmpresa = async (req, res) => {
    try {
        const { id_empresa } = req.params;
        const empresas = await Empresa.findOne({
            where: {
                id_empresa,
            },
        });
        if (!empresas) {

            return res.status(404).json({ message: 'ESA EMPRESA NO EXISTE' });

        }
        res.json(empresas);
    } catch (error) {
        return res.status(500).json({ message: error.message });

    }
};

export const createEmpresa = async (req, res) => {
    const { nombre_empresa, celular_empresarial} = req.body
    try {
        const newEmpresa = await Empresa.create({
            nombre_empresa,
            celular_empresarial
        });

        res.json(newEmpresa);
    } catch (error) {

        return res.status(500).json({ message: error.message });
    }
};

export const updateEmpresa = async (req, res) => {
    try {
        const { id_empresa } = req.params
        const update = await Empresa.findOne({
            where: {
                id_empresa
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

export const deleteEmpresa = async (req, res) => {
    try {
        const { id_empresa } = req.params;

        const elim_empresa = await Empresa.destroy({
            where: {
                id_empresa,
            },
        });
        if (!elim_empresa) {
            return res.status(404).json({ message: 'ESA EMPRESA NO EXISTE' });
        }
        console.log(elim_empresa)
        console.log('Se elimino el registro')
        res.sendStatus(204)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};