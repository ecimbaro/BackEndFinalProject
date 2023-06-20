const routeError = (req, res) => {
    res.status(404).json({message : `La URL ${req.url} con el metodo ${req.method} no fue encontrada. Verifique que haya sido bien escrita`})
}

module.exports = {routeError}