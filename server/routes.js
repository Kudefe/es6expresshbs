import express from 'express'

//controller import
import basicController from './controllers/basicController'

const routes = express()

routes.get('/', basicController.get)

export default routes
