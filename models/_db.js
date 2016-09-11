const Sequelize = require('sequelize')

var db = new Sequelize('postgres://localhost:5432/flack', {
  logging: false
})

module.exports = db
