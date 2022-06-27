const { db, DataTypes } = require('../utils/database.util')

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
        allowNull: true
    },

    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'working'
    }
})

module.exports = { Register };