// 1. require express and create a pipeline to it
var express = require('express')
var session = require('express-session')
var app = express()
var db = require('./models')
var Room = db.Room
var Message = db.Message

// 1a. sockets
// var server = require('http').Server(app)
// var io = require('socket.io')(server);
// io.on('connection', function(socket){
//   console.log("Hello, you've connected");
//   console.log('ip server', socket.request.connection.remoteAddress); 
// })
// server.listen(3001, function () {
//   console.log('The server is listening on port 3001!')
// })
// server.on('request', app)


// 2. require dependencies
var bodyParser = require('body-parser')
var morgan = require('morgan')
var path = require('path')
// var groups = require('./groups')

// 73 to get access to frontend node modules and browser
var npmPath = path.join(__dirname, './node_modules')
var browserPath = path.join(__dirname, './browser')
// const db = require('./models/_db')

// 4. use morgan dev, body parser, and  express.static
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(session({
  secret: 'ring ring ring ring ring ring ring, banana phone',
  resave: false,
  saveUninitialized: false
}))

app.use(express.static('public'))
app.use(express.static(npmPath))
app.use(express.static(browserPath))
var goneHome = false;
// //5. use wikiRouter when route hits 'wiki'
// app.use('/', wikiRouter)
app.get(function(req,res,next){
    res.redirect('/#/1');
    res.send();
})

var router = express.Router()

router.get('/room', function (req, res, next) {
  Room.findAll({})
    .then(function (rooms) {
      res.send(rooms)
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
  console.log('HELLO', req.body)
  let content = require('./synonyms')(req.body.content, 90, 'Someone')
  console.log('CONTENT IS', content)
  Message.create({
    content: content
  })
    .then(function (message) {
      Room.findOne({
        where: {
          name: req.params.roomName
        }
      })
        .then(function (room) {
          message.setRoom(room.id)
            .then(function (message) {
              res.send(message)
              console.log('it works')
            })
        })
    })
})

router.get('/:id', function (req, res, next) {
  // var nsp = io.of('/' + req.params.id)
  // console.log('NSP', nsp);
  // nsp.on('connection', socket => {
  //   console.log('socket connection')
  //   socket.on('post', () => {
  //     socket.broadcast.emit('refresh')
  //   })
  // })
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
          res.send([messages, room])
        })
    })
})

app.use('/api', router)
// 8. go  to the layout page when you hit main page or put random stuff after
app.get('/*', function (req, res) {
  res.sendFile('browser/index.html', {'root': __dirname})
})


// 5. App.listen

db.db.sync()
  .then(function () {
    app.listen(3001, function () {
      console.log('Listening on Port 3001')
    })
  })


  // 6. Sync User and Page from models then listen for port 3000
  // models.User.sync()
  // .then(function(){
  //   return models.Page.sync()
  // })
  // .then(function () {
  //   app.listen(3000, function(){
  //     console.log('Listening on port 3000')
  //   })
  // })
