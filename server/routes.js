import express from 'express'

//controller import
import homeController from './controllers/home'
import gamesController from './controllers/games'
import addGameController from './controllers/addGame'

const routes = express()

//import todos los controllers
routes.get('/', homeController.get)
routes.get('/games', gamesController.get)
routes.get('/games/add', addGameController.get)
routes.post('/games/add', addGameController.post)

export default routes
