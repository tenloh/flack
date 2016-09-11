const db = require('./_db')
const Room = require('./room')
const Message = require('./message')

Message.belongsTo(Room)

module.exports = {Room, Message, db}
