require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Tomato = require('./models/tomatoesModel')
const PORT = process.env.PORT || 3002

const app = express()

app.use(express.json()) 
// app.get('/tomatoes/new', (req, res) => {
//     res.render('tomatoes/New')
// })

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
     console.log('My Old Nanny Grows Oranges')
 })

app.listen(PORT, () => {
    console.log(`Michael Phelps eats ${PORT} calories at breakfast`)
})