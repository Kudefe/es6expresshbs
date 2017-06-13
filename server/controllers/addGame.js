import Game from './../../models/gameInterview'
import mongoose from 'mongoose'

const addGameController = {}

addGameController.get = (req, res) => {
  res.render('add_game', {
        title: 'Add Game'
      })
    }

//post
addGameController.post = (req, res) => {
  let game = new Game()
  game.title = req.body.title
  game.author = req.body.author
  game.body = req.body.body

  game.save((err) => {
    if (err) {
      console.log(err);
    }else {
      res.redirect('/')
    }
  })
}

export default addGameController
