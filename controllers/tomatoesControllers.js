const Tomato = require('../models/tomatoesModel')

//Logging Novel Varieties 
exports.addTomato = async (req, res) => {
    try {
        const addTomato = new Tomato(req.body)
        await addTomato.save()
        res.send(addTomato)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}
