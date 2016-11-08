const Sequelize = require('sequelize')

var db = new Sequelize(env.DATABASE_URL, {
  logging: false
})

module.exports = db
