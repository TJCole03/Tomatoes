require('dotenv').config()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3009
const express = require('express')
// // const methodOverride = require('method-override')
// const morgan = require('morgan')
//const tomatoesRoutes = require('./routes/tomatoesRoutes')
// const userRoutes = require('./routes/userRoutes')
const Tomato = require('./models/tomato')
const Potato = require('./models/potato')
const jsxEngine = require('jsx-view-engine');
// require('./views/Edit')
// require('./views/IndexTomato')
// require('./view/NewTomato')
// require('./views/ShowTomato')

const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: true }))

// app.use(express.json());
// //app.use(methodOverride('_method'));
// app.use(morgan('combined'));
//app.use('/tomatoes', tomatoesRoutes); 
// app.use('/user', userRoutes);

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
     console.log('My Old Nanny Grows Oranges')
})
 

//INDEX

app.get('/tomatoes', async (req, res) => {
    try {
        const foundTomatoes = await Tomato.find({})
        res.render('tomatoes/Index', {
            tomatoes: foundTomatoes
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }

})

//NEW

app.get('/tomatoes/new', (req, res) => {
    res.render('./tomatoes/New')
})

//DELETE 

app.delete('/tomatoes/:id', async (req, res) => {
    try {
       await Tomato.findOneAndDelete({ _id: req.params.id})
            .then(() => {
            res.redirect('./tomatoes')
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

//UPDATE

app.put('/tomatoes/:id', async (req, res) => {
    try {
        await Tomato.findOneAndUpdate({ _id: req.params.id }, 
            req.body, { new: true })
            .then(() => {
                res.redirect(`/tomatoes/${req.params.id}`)
            })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
} )
//CREATE??

app.post('/tomatoes', async (req, res) => {
    try {
        const newVariety = await Tomato.create(req.body)
        //res.send(`/tomatoes/${newVariety}`)
        res.redirect(`/tomatoes/${newVariety._id}`)

    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})
app.post('/potatoes', async (req, res) => {
    try {
        const newVariety = await Potato.create(req.body)
        //res.send(`/potatoes/${newVariety}`)
        res.redirect(`/potatoes/${newVariety._id}`)

    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

//EDIT

app.get('/tomatoes/:id/edit', async (req, res) => {
    try {
        const foundTomato = await Tomato.findOne({ _id: req.params.id})
        res.render('tomatoes/Edit', {
            tomato: foundTomato
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

//SHOW

app.get('tomatoes/:id', async (req, res) => {
    try {
        const foundTomato = await Tomato.findOne({ _id: req.params.id })
        res.render('/tomatoes/Show', {
            tomatoes: foundTomato
        })
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

// // app.use('/logout', logoutUser)
// module.exports = app;  



app.listen(PORT, () => {
    console.log(`Michael Phelps eats ${PORT} calories at breakfast`)
})
 