const Potato = require('../models/potato')

//Logging Novel Varieties 
exports.addPotato = async (req, res) => {
    console.log('addPotato') //if you get console log in terminal, then you've hit the route. 
    try {
        const addPotato = new Potato(req.body)
        await addPotato.save()
        res.json({Potato: addPotato})
        //res.send(addPotato)
    } catch (error) {
        res.status(400).json({ message: error.message })
    } 
}

exports.listPotatoes = async (req, res) => {
    try {
            console.log('listPotatoes')
            const listOfPotatoes = await Potato.find({})
            res.json(listOfPotatoes)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
}
    
exports.getPotato = async (req, res) => {
    console.log('getPotato')
    try {
        const potato = await Potato.findOne({ _id: req.params.id })
        res.json(potato)
    } catch (error) {
        res.status(400).json({ message: error.message })
        }
}


exports.deletePotato = async (req, res) => {
    try {
        const potatoes = await Potato.findOne({ _id: req.params.id })
        potatoes.deleteOne()
        res.json({ message: 'Deleted Successfully' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.updatePotato = async (req, res) => {
    console.log('updatePotato')
    try {
        const updates = Object.keys(req.body)
        //newProp means New Plant Properties
        const newProp = await Potato.findOne({ _id: req.params.id })
        updates.forEach((update) => (newProp[update] = req.body[update]))
        await newProp.save();
        res.status(200).json({ newProp, message: 'Updated Successfully'})
    } catch (error) {
        res.status(400).json({ message: error.message })
        }
}

