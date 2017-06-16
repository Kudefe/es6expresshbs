import express from 'express'
import path from 'path'
import routes from './routes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

mongoose.connect('mongodb://localhost/gamekb')
let db = mongoose.connection

//check connection
db.once('open', ()  => {
  console.log('conectado a mongoDB');
})

//check for db errors
db.on('error', (err) => {
  console.log(err);
})

const app = express()

//load view engine
app.set('views', path.join(__dirname, '/../views'))
app.set('view engine', 'hbs')

// Body parser middlware
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//set public folder
app.use(express.static(path.join(__dirname, 'public')))

//use routes
app.use('/', routes);


export default app
