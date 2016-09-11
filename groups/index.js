var express = require('express')
var bodyParser = require('body-parser')
var router = express.Router()
var Sequelize = require('sequelize')
var Room = require('../models/room.js')
var Message = require('../models/message.js')

router.get('/room', function (req, res, next) {
  Room.findAll({})
    .then(function (rooms) {
      res.send(rooms)
    })
})

router.get('/:id', function (req, res, next) {
  Room.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function (room) {
      Message.findAll({
        where: {
          roomId: room.id
        }
      })
        .then(function (messages) {
          console.log(messages)
          res.send([messages, room])
        })
    })
})

router.post('/room', function (req, res, next) {
  Room.create({
    name: req.body.name
  })
    .then(function (room) {
      res.send(room)
    })
})
router.post('/messages/:roomName', function (req, res, next) {
<<<<<<< HEAD
	let content = require('../synonyms')(req.body.content, 90, 'Someone');
	Message.create({
		content: content
	})
		.then(function (message) {
			Room.findOne({
				where: {
					name: req.params.roomName
				}
			}).then(function (room) {
				message.setRoom(room.id)
					.then(function (message) {
						res.send(message)
						console.log("it works")
					})
			})

		})
=======
  console.log('HELLO', req.body)
  let content = require('../synonyms')(req.body.content, 90, 'Someone')
  console.log('CONTENT IS', content)
  Message.create({
    content: content
  })
    .then(function (message) {
      Room.findOne({
        where: {
          name: req.params.roomName
        }
      }).then(function (room) {
        message.setRoom(room.id)
          .then(function (message) {
            res.send(message)
            console.log('it works')
          })
      })
    })
>>>>>>> f4d9ddfb0adff4264e74ecbf8f3e0d5b38a4523d
})

// router.post("/:id", function(req,res,next) {

// 		return Message.create({
// 			content:req.body.content
// 		})
// 	.then(function(message) {
// 			Room.findOne({
// 				where : {
// 					id : req.params.id
// 				}
// 			}).then(function(room) {
// 				.setMessages(message)
// 				res.send(room.data.messages)
// 				console.log("woot")
// 			})
// 	})

// })

module.exports = router
