const mongoose = require('mongoose')

const tomatoSchema = new mongoose.Schema({
    variety: { type: String  }, 
    skinColor: { type: String  }, 
    fleshColor: { type: String  },  
    breed: {type: String , enum: ['Hybrid', 'Hierloom'] }, 
    leafType: { type: String }, //Optional. 
    plantType: { type: String , enum: ['Determinate', 'Indeterminate'] }, 
    plantHeight: { type: Number  }, 
    fruitShape: { type: String , enum: ['Round', 'Oxheart', 'Beefsteak', 'Globe', 'Grape', 'Other'] }, 
}, { collection: 'tomatoes' })

const Tomato = mongoose.model('Tomato', tomatoSchema) 



module.exports = Tomato