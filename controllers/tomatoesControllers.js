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
    exports.listTomatoes = async (req, res) => {
        try {
            const listOfTomatoes = await Tomato.find({})
            res.json(listOfTomatoes)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

// exports.updateTomato = async (req, res) => {
//     try {
//         //newAttr means New Attribute
//         const newAttr = new 
            
//     } catch (error) {
//         res.status(400).json({ message: error.message })
//         }
//     }


