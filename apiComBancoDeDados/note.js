const Sequelize = require('sequelize')
const database = require('./db')

const Note = database.define('note', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Note