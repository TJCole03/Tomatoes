const mongoose = require('mongoose')

const tomatoSchema = new mongoose.Schema({
    variety: { type: String, required: true }, 
    skinColor: { type: String, required: true }, 
    fleshColor: { type: String, required: true },  
    breed: {type: String, required: true, enum: ['Hybrid', 'Hierloom'] }, 
    leafType: { type: String, required: true}, //Optional. 
    plantType: { type: String, required: true, enum: ['Determinate', 'Indeterminate'] }, 
    plantHeight: { type: Number, required: true }, 
    fruitShape: { type: String, required: true, enum: ['Round', 'Oxheart', 'Beefsteak', 'Globe', 'Grape', 'Other'] }, 
}, { collection: 'tomatoes' })

const Tomato = mongoose.model('Tomato', tomatoSchema) 

module.exports = Tomato