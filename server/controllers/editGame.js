import Game from './../../models/gameInterview'
import mongose from 'mongoose'

const editGame = {}

editGame.get = (req, res) => {
  Game.findById(req.params.id, (err, games) => {

    res.render('edit_interview', {
      games:games
    })
  })
}

//update submit
editGame.post = (req, res) => {
  let games = {}
  games.title = req.body.title
  games.author = req.body.author
  games.body = req.body.body

  let query = {_id:req.params.id}

  Game.update(query, games, (err) => {
    if (err) {
      console.log(err);
      return
    } else {
      res.redirect('/games')
    }
  })
}

export default editGame
