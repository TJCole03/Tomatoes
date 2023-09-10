require('dotenv').config()
const app = require('./app')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3009

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())


mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
     console.log('My Old Nanny Grows Oranges')
 })

app.listen(PORT, () => {
    console.log(`Michael Phelps eats ${PORT} calories at breakfast`)
})
 