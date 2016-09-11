// 1. require express and create a pipeline to it
var express = require('express')
var session = require('express-session');
var app = express();

// 2. require dependencies
var bodyParser = require('body-parser')
var morgan = require('morgan')
var path = require('path')
var groups = require('./groups');

// 73 to get access to frontend node modules and browser
var npmPath = path.join(__dirname, './node_modules')
var browserPath = path.join(__dirname, './browser')
const db = require('./models/_db')

// 4. use morgan dev, body parser, and  express.static
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(session({
  secret: 'ring ring ring ring ring ring ring, banana phone',
  resave: false,
  saveUninitialized: false
}));

app.use(express.static('public'))
app.use(express.static(npmPath))
app.use(express.static(browserPath))

// //5. use wikiRouter when route hits 'wiki'
// app.use('/', wikiRouter)
app.use('/api', groups);
// 8. go  to the layout page when you hit main page or put random stuff after
app.get('/*', function (req, res) {
  res.sendFile('browser/index.html', {'root': __dirname})
})

// 5. App.listen

db.sync()
.then(function() {
	app.listen(3001, function() {
	console.log("Listening on Port 3001");
	});
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
