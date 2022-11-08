import { DataTypes } from 'sequelize'
import { sequelize } from '../db/db.js'
import { Contacto } from './Contacto.js'




export const Data = sequelize.define('data', {

    id_data: {

        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    nombre: {

        type: DataTypes.STRING

    },
    apellido: {

        type: DataTypes.STRING

    }

}, {
    timestamps: false
});

Data.hasMany(Contacto, {

    foreignKey: 'idInformacion',
    sourceKey: 'id_data'
})

Contacto.belongsTo(Data, {

    foreignKey: 'idInformacion',
    targetId: 'id_contacto'
})