//este es el main route. El index!!

const gamesController = {}

gamesController.get = (req, res) => {
  let games = [
    {
      id: 1,
      title: 'juego 1',
      author: "Gonzalo",
      body: "articulo 1"
    },
    {
      id: 2,
      title: 'juego 2',
      author: "Gonzalo 2",
      body: "articulo 2"
    },
    {
      id: 3,
      title: 'juego 3',
      author: "Gonzalo 3",
      body: "articulo 3"
    }
  ]
  res.render('games', {
    title: 'Add Game',
    games: games
  })
}

export default gamesController
