const express = require('express')
const app = express();
const morgan = require('morgan')
const tomatoesRoutes = require('./routes/tomatoesRoutes')
const userRoutes = require('./routes/userRoutes')
 //ONYL NEED THIS ONCE 
//const tomatoesModel = require('./models/tomato')

app.use(express.json());
app.use(morgan('combined'));
app.use('/tomatoes', tomatoesRoutes); 
app.use('/users', userRoutes);
module.exports = app;  