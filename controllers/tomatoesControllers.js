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
    
exports.getTomato = async (req, res) => {
    try {
        const tomato = new Tomato.findOne({ _id: req.params.id })
        res.json(tomato)
    } catch (error) {
        res.status(400).json({ message: error.message })
        }
}


exports.deleteTomato = async (req, res) => {
    try {
        const tomatoes = await Tomato.findOne({ _id: req.params.id })
        tomatoes.deleteOne()
        res.json({ message: 'Deleted Successfuly' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.updateTomato = async (req, res) => {
    try {
        //newProp means New Plant Properties
        const newProp = await Tomato.findOneAndUpdate({ _id: req.params.id })
            //id of document you wanna update 
            .get('/:id')
        //content of document you wanna update
            .put()
        // {new:true} use this object as third argument of the function
        //where will i get this information from?? where is everything stored? 
        
    } catch (error) {
        res.status(400).json({ message: error.message })
        }
}