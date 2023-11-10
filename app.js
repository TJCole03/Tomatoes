// const express = require('express')
// const app = express();
// const morgan = require('morgan')
// const tomatoesRoutes = require('./routes/tomatoesRoutes')
// // const userRoutes = require('./routes/userRoutes')
// //  //ONYL NEED THIS ONCE 
// // const tomatoesModel = require('./models/tomato')
// // const Tomato = require('./models/tomato')
// const jsxEngine = require('jsx-view-engine');

// app.use(express.urlencoded({ extended: true }))
// ///app.use(express.json());
// app.use(morgan('combined'));
// app.use('/tomatoes', tomatoesRoutes); 
// // app.use('/user', userRoutes);

// app.set('view engine', 'jsx')
// app.engine('jsx', jsxEngine())


// // //INDEX

// // app.get('/tomatoes', async (req, res) => {
// //     try {
// //         const foundTomatoes = await Tomato.find({})
// //         res.render('tomatoes/Index', {
// //             tomatoes: foundTomatoes
// //         })
// //     } catch (errror) {
// //         res.status(400).send({ message: error.message })
// //     }

// // })

// // //NEW

// // app.post('/tomatoes/new', (req, res) => {
// //     res.render('/tomatoes/New')
// // })

// // //UPDATE

// // // app.put('/tomatoes/')

// // //CREATE??

// // app.post('/fruits/new', async (req, res) => {
// //     try {
// //         const newVariety = await Tomato.addTomato()
// //         res.render('/tomatoes/New', {
// //             tomatoes: newVariety
// //         })
// //     } catch (error) {
// //         res.status(400).send({ message: error.message })
// //     }
// // })

// // //EDIT

// // app.get('/tomatoes/:id/edit', async (req, res) => {
// //     try {
// //         const foundTomato = await Tomato.findOne({_id: req.params.id})
// //         res.render('tomatoes/Edit', {
// //             tomato: foundTomato
// //         })
// //     } catch (error) {
// //         res.status(400).send({ message: error.message })
// //     }
// // })

// // //SHOW

// // // app.use('/logout', logoutUser)
// module.exports = app;  