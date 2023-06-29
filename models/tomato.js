const mongoose = require('mongoose')

const tomatoSchema = new mongoose.Schema({
    variety: { type: String, required: true }, //Specific name of variety: Big Boy, Green Zebra, Jubilee
    skinColor: { type: String, required: true }, //We have more colors of tomato than just red!
    fleshColor: { type: String }, //Only important if it differs from skin color. More for culinary purposes. 
    breed: { type: String, required: true }, //Hybrid? Hierloom? 
    leafType: { type: String}, //Optional. 
    plantType: { type: String, required: true }, //determinate vs indeterminate
    plantHeight: { type: Number, required: true }, //Spacing is crucial when planting and height determines spacing
    fruitShape: { type: String, required: true }, //optional; round, oxheart, beefsteak, globe, grape
}, { collection: 'tomatoes' })

const Tomato = mongoose.model('Tomato', tomatoSchema) 

module.exports = Tomato