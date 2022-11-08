var express = require('express');
var router = express.Router();
const ingredientCtrl = require('../controllers/ingredient.js');

router.get('/new', ingredientCtrl.new);
router.post('/', ingredientCtrl.create);


module.exports = router;