import { DataTypes } from 'sequelize'
import { sequelize } from '../db/db.js'
import { Contacto } from './Contacto.js'


export const Profesion = sequelize.define('profesion', {


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

Profesion.hasMany(Contacto, {

    foreignKey: 'idprofesion',
    sourceKey: 'id_profesion'
})

Contacto.belongsTo(Profesion, {

    foreignKey: 'idprofesion',
    targetId: 'id_contacto'
})