import Game from './../../models/gameInterview'
import mongoose from 'mongoose'

const adminGames = {}

adminGames.get = (req, res) => {
  Game.findById(req.params.id, (err, games) => {
    res.render('admin_interview', {
      games:games
    })
  })
}

export default adminGames
