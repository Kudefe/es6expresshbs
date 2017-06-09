import express from 'express'
import path from 'path'
import routes from './routes'

const app = express()

//load view engine
app.set('views', path.join(__dirname, '/../views'))
app.set('view engine', 'hbs')

//use routes
app.use('/', routes);


export default app
