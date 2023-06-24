require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3002


mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
     console.log('My Old Nanny Grows Oranges')
 })

app.listen(PORT, () => {
    console.log(`Michael Phelps eats ${PORT} calories at breakfast`)
})
