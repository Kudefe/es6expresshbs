//este es el main route. El index!!
import Game from './../../models/gameInterview'
import mongoose from 'mongoose'

const gamesController = {}

gamesController.get = (req, res) => {
  Game.find({}, (err, games) => {
    if (err) {
      console.log(err);
    } else {
      res.render('games', {
        title: 'Add Game',
        games: games
      })
    }
  })

}

export default gamesController
