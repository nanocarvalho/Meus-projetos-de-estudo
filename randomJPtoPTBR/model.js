const Sequelize  = require('sequelize')
const database = require('./db')

const data = database.define('data', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    japanese: {
        type: Sequelize.STRING
    },
    portuguese: {
        type: Sequelize.STRING
    },
    difficulty: {
        type: Sequelize.STRING
    }
}, {timestamps: false})

module.exports = data