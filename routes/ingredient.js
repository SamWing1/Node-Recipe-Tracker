var express = require('express');
var router = express.Router();
const ingredientCtrl = require('../controllers/ingredient.js');

router.get('/ingredient/new', ingredientCtrl.new);
router.post('/ingredient', ingredientCtrl.create);
router.post('/recipe/:id/ingredient', ingredientCtrl.addToRecipe)
router.delete('/recipe/:recipeid/ingredient/:ingredientid', ingredientCtrl.delete);

module.exports = router;