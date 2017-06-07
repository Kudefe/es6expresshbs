const basicController = {}

basicController.get = (req, res) => {
  res.json({
    message: 'funcionando!'
  })
}


export default basicController
