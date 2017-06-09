const addGameController = {}

addGameController.get = (req, res) => {
  res.render('add_game', {
    title: 'Add Game'
  })
}

export default addGameController
