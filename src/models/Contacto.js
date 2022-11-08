import {DataTypes} from 'sequelize'
import {sequelize} from '../db/db.js'



export const contacto= sequelize.define('contact',{


    id_contacto: {

        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true

    },

    correo: {

        type: DataTypes.STRING

    },
    telefono: {

        type: DataTypes.STRING


    },
    direccion: {


        type: DataTypes.STRING

    },
    celular: {

        type: DataTypes.STRING

    },
},{
    timestamps:false
}
);