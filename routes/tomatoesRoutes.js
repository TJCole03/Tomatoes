const express = require('express')
const router = express.Router()
const tomatoesController = require('../controllers/tomatoesController')


//Sustainable agriculture students need to browse through potential tomato varieties for the campus community garden 
router.get('/', tomatoesController.listTomatoes); 
//Botany students add novel varieties to database
router.post('/', tomatoesController.addTomato); 
// //A grad student in entymology finds out one variety is uniquely and shockngly resistant to root nematodes. They need to update the tomatoe's stats right away!
router.put('/:id', tomatoesController.updateTomato); 
// //Finding tomato by id
router.get('/:id', tomatoesController.getTomato);
// //Finding tomato/es by attribute(color)
//router.get('/search/', tomatoesController.getTomatoByAttribute)
// 
router.delete('/:id', tomatoesController.deleteTomato); 

module.exports = router; 



//passing in search terms; 'search?t=orange; all the params com after the quesion mark; if multiple, that's when you see /search?color=orange&size=10; access variables in controolers through req.params.color (or whatever variable); 
//passing in variables form query strings to tht etop.  