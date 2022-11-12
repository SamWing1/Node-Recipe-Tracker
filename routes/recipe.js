var express = require('express');
var router = express.Router();
const recipeCtrl = require('../controllers/recipe');

router.get('/new', recipeCtrl.new);
router.post('/', recipeCtrl.create);
router.get('/index', recipeCtrl.index);
router.get('/:id', recipeCtrl.show);
router.delete('/:id', recipeCtrl.delete);
router.get('/:id/edit', recipeCtrl.edit);
router.put('/:id', recipeCtrl.update);



module.exports = router;