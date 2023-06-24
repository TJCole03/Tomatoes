const Tomato = require('../models/tomato')


// exports.createUser = async (req, res) => {
//     try {

//     } catch (error) {

//     }
// }

// exports.loginUser = async (req, res) => {
//     try {

//     } catch (error) {
        
//     }
// }

// exports.logoutUser = async (req, res) => {
//     try {

//     } catch (error) {
        
//     }
//}

//Logging Novel Varieties 
exports.addTomato = async (req, res) => {
    console.log('addTomato') //if you get console log in terminal, then you've hit the route. 
    try {
        const addTomato = new Tomato(req.body)
        await addTomato.save()
        res.json(addTomato) 
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
    console.log('getTomato')
    try {
        const tomato = await Tomato.findOne({ _id: req.params.id })
        res.json(tomato)
    } catch (error) {
        res.status(400).json({ message: error.message })
        }
}


exports.deleteTomato = async (req, res) => {
    try {
        const tomatoes = await Tomato.findOne({ _id: req.params.id })
        tomatoes.deleteOne()
        res.json('Deleted Successfully')
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// exports.updateTomato = async (req, res) => {
//     try {
//         //newProp means New Plant Properties
//         const newProp = await Tomato.findOneAndUpdate({ _id: req.params.id })
//             //id of document you wanna update 
//             .get('/:id')
//         //content of document you wanna update
//             .put()
//         // {new:true} use this object as third argument of the function
//         //where will i get this information from?? where is everything stored? 
        
//     } catch (error) {
//         res.status(400).json({ message: error.message })
//         }
// }

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