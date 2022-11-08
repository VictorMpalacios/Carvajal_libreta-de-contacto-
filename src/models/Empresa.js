import { DataTypes } from 'sequelize'
import { sequelize } from '../db/db.js'
import { contacto } from './contacto.js'


export const empresa = sequelize.define('company', {


    id_empresa: {

        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },

    nombre_empresa: {

        type: DataTypes.STRING

    },
    celular_empresarial: {

        type: DataTypes.STRING

    }
}, 
{
    timestamps: false
});

empresa.hasMany(contacto, {

    foreignKey: 'idempresa',
    sourceKey: 'id_empresa'
})

contacto.belongsTo(empresa, {

    foreignKey: 'idempresa',
    targetId: 'id_contacto'
})