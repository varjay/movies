var express 		= require('express')
var path 			= require('path')
var mongoose 		= require('mongoose')
var logger 			= require('morgan')
var bodyParser 		= require('body-parser')
var cookieParser 	= require('cookie-parser')
var session 		= require('express-session')
var mongoStore		= require('connect-mongo')(session)
var serveStatic		= require('serve-static')

var port = process.env.PORT || 3000
var app = express()
var dbUrl = 'mongodb://localhost/movie'
mongoose.connect(dbUrl)

app.set('views', './app/views/pages')
app.set('view engine', 'jade')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({
	secret: 'movie',
	resave: false,
	saveUninitialized: true,
	store: new mongoStore({
		url: dbUrl,
		collection: 'sessions'
	})
}))

var env = process.env.NODE_ENV || 'develoment'
app.use(logger('dev'))

if ('develoment' === env) {
	app.set('showStackError', true)
	app.use(logger(':method :url :status'))
	app.locals.pretty = true
	// mongoose.set('debug', true)
}

require('./config/routes')(app)

app.listen(port)
app.locals.moment = require('moment')
app.use(serveStatic(path.join(__dirname, 'public')))

console.log('started on port ' + port)





