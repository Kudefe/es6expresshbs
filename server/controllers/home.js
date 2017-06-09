//se va a redirigir a /games
const homeController = {}

homeController.get = (req, res) => {
  res.redirect('/games')
}


export default homeController
