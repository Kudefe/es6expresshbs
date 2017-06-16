import Game from './../../models/gameInterview'
import mongoose from 'mongoose'

const gameId = {}

gameId.get = (req, res) => {
  Game.findById(req.params.id, (err, games) => {
    res.render('interview', {
      games:games
    })
  })
}

export default gameId
