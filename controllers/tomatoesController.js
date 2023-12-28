const Tomato = require('../models/tomato')

//Logging Novel Varieties 
exports.addTomato = async (req, res) => {
    console.log('addTomato') //if you get console log in terminal, then you've hit the route. 
    try {
        const addTomato = new Tomato(req.body)
        await addTomato.save()
        //res.json({tomato: addTomato})
        // res.send(addTomato)
        res.send({tomato: addTomato})
        res.status(200).json({ newProp, message: 'Added Successfully'})
    } catch (error) {
        res.status(400).json({ message: error.message })
    } 
}

exports.listTomatoes = async (req, res) => {
    try {
            console.log('listTomatoes')
            const listOfTomatoes = await Tomato.find({})
            res.json(listOfTomatoes)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
}
    
exports.getTomato = async (req, res) => {
    console.log('getTomato hit')
    try {
        const tomato = await Tomato.findById({ _id: req.params.id })
        res.json(tomato)
    } catch (error) {
        res.status(400).json({ message: error.message })
        }
}


exports.deleteTomato = async (req, res) => {
    try {
        const tomatoes = await Tomato.findOne({ _id: req.params.id })
        tomatoes.deleteOne()
        res.json({ message: 'Deleted Successfully' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.updateTomato = async (req, res) => {
    console.log('updateTomato')
    try {
        const updates = Object.keys(req.body)
        //newProp means New Plant Properties
        const newProp = await Tomato.findOne({ _id: req.params.id })
        updates.forEach((update) => (newProp[update] = req.body[update]))
        await newProp.save();
        res.status(200).json({ newProp, message: 'Updated Successfully'})
    } catch (error) {
        res.status(400).json({ message: error.message })
        }
}

