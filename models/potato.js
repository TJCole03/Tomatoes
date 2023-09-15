const mongoose = require('mongoose') 

const potatoSchema = new mongoose.Schema({
    variety: { type: String  }, 
    skinColor: { type: String  }, 
    fleshColor: { type: String  },  
    breed: {type: String , enum: ['Hybrid', 'Hierloom'] }, 
    leafType: { type: String }, //Optional. 
    plantType: { type: String , enum: ['Determinate', 'Indeterminate'] }, 
    plantHeight: { type: Number  }, 
    rootShape: { type: String , enum: ['Round', 'Oxheart', 'Beefsteak', 'Globe', 'Grape', 'Other'] }, 
}, 
)

const Potato = mongoose.model('Potato', potatoSchema)

module.exports = Potato 