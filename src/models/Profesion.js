import { DataTypes } from 'sequelize'
import { sequelize } from '../db/db.js'
import { contacto } from './contacto.js'


export const profesion = sequelize.define('profesion', {


    id_profesion: {

        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },

    nombre_profesion: {

        type: DataTypes.STRING

    },
},{
    timestamps: false
});

profesion.hasMany(contacto, {

    foreignKey: 'idprofesion',
    sourceKey: 'id_profesion'
})

contacto.belongsTo(profesion, {

    foreignKey: 'idprofesion',
    targetId: 'id_contacto'
})