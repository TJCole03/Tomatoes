const mongoose = require('mongoose')

const tomatoSchema = new mongoose.Schema({
    variety: { type: String, require: true }, //Specific name of variety: Big Boy, Green Zebra, Jubilee
     skinColor: { type: String, require: true }, //We have more colors of tomato than just red!
     fleshColor: { type: String, require: false }, //Only important if it differs from skin color. More for culinary purposes. 
     breed: { type: String, require: true }, //Hybrid? Hierloom? 
     leafType: { type: String, require: false }, //Optional. 
     plantType: { type: String, require: true }, //determinate vs indeterminate
     plantHeight: { type: Number, require: true }, //Spacing is crucial when planting and height determines spacing
     fruitShape: { type: String, require: true }, //optional; round, oxheart, beefsteak, globe, grape
})

const Tomato = mongoose.model('Tomato', tomatoSchema)

module.exports = Tomato