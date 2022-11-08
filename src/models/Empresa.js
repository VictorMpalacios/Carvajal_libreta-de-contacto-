import { DataTypes } from 'sequelize'
import { sequelize } from '../db/db.js'
import { Contacto } from './Contacto.js'


export const Empresa = sequelize.define('empresa', {


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

Empresa.hasMany(Contacto, {

    foreignKey: 'idempresa',
    sourceKey: 'id_empresa'
})

Contacto.belongsTo(Empresa, {

    foreignKey: 'idempresa',
    targetId: 'id_contacto'
})