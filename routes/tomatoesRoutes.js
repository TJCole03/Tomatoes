const express = require('express')
const router = express.Router()
const tomatoesControllers = require('../controllers/tomatoesControllers')

//Botany students add novel varieties to database
router.post('/', tomatoesControllers.addTomato); 
//Sustainable agriculture students need to browse through potential tomato varieties for the campus community garden 
router.get('/', tomatoesControllers.listTomatoes); 
// //A grad student in entymology finds out one variety is uniquely and shockngly resistant to root nematodes. They need to update the tomatoe's stats right away!
router.put('/:id', tomatoesControllers.updateTomato); 
// //Finding tomato by id
// router.get('/:id', tomatoesControllers.getTomato);
// //Finding tomato/es by attribute(color)
// //router.get(('/tomatoes' ? color : `${color}`).getTomatoByAttribute)
// //
// router.delete('/:id', tomatoesControllers.deleteTomato); 

module.exports = router; 