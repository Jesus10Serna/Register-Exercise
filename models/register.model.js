const { db, DataTypes } = require('../models/register.model')

const Register = db.define('register', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    entranceTime: {
        type: DataTypes.DATE,
        allowNull: false
    },

    exitTime: {
        type: DataTypes.DATE,
        allowNull: false
    },

    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'working'
    }
})

Module.exports = { Register };