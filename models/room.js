const Sequelize = require('sequelize')
const db = require('./_db')
const _ = require('lodash')
const Message = require('./message')

const Room = db.define('room', {
  name: {type: Sequelize.STRING, isUnique: true}
}, {
  getterMethods: {
    urlTitle: () => _.snakeCase(this.name)
  }
})

Room.getterMethods
Message.belongsTo(Room)
module.exports = Room
