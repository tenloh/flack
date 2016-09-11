const Sequelize = require('sequelize')
const db = require('./_db')

const Message = db.define('message', {
  content: Sequelize.TEXT
})

module.exports = Message
