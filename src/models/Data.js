import { DataTypes } from 'sequelize'
import { sequelize } from '../db/db.js'
import { contacto } from './contacto.js'




export const data = sequelize.define('datacontact', {

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

data.hasMany(contacto, {

    foreignKey: 'idInformacion',
    sourceKey: 'id_data'
})

contacto.belongsTo(data, {

    foreignKey: 'idInformacion',
    targetId: 'id_contacto'
})