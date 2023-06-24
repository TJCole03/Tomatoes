const express = require('express')
const morgan = require('morgan')
const tomatoesRoutes = require('./routes/tomatoesRoutes')
const app = express(); //ONYL NEED THIS ONCE 
//const tomatoesModel = require('./models/tomato')

app.use(express.json());
app.use(morgan('combined'));
app.use('/tomatoes', tomatoesRoutes); 
// app.use('/tomatoes', tomatoesModel);
module.exports = app; 