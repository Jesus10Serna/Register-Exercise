const { Sequelize, DataTypes } = require("sequelize");

// Conect to database

const db = new Sequelize ({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'Colombia1',
    port: 5432,
    database: 'Registers',
    logging: false
})

module.exports = {db, DataTypes}