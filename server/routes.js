import express from 'express'

//controller import
import homeController from './controllers/home'
import gamesController from './controllers/games'
import addGameController from './controllers/addGame'
import gameId from './controllers/gamesID'
import editGame from './controllers/editGame'
import admin from './controllers/adminPanel'
import adminGames from './controllers/adminGames'

const routes = express()

//import todos los controllers
//get controllers
routes.get('/', homeController.get)
routes.get('/games', gamesController.get)
routes.get('/games/:id', gameId.get)
routes.get('/admin/add/', addGameController.get)
routes.get('/admin/edit/:id', editGame.get)
routes.get('/admin/', admin.get)
routes.get('/admin/:id', adminGames.get)


//post controllers
routes.post('/games/add', addGameController.post)
routes.post('/admin/edit/:id', editGame.post)


export default routes
