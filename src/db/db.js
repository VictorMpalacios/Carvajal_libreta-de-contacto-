import Sequelize from "sequelize"

export const sequelize = new Sequelize('libreta_de_contactos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
}) 