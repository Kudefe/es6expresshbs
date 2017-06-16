import Game from './../../models/gameInterview'
import mongoose from 'mongoose'

const admin = {}

admin.get = (req, res) => {
  Game.find({}, (err, games) => {
    if (err) {
      console.log(err);
    } else {
      res.render('admin', {
        title: 'Admin Pannel',
        games: games
      })
    }
  })
}

export default admin
