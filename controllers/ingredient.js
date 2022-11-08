const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');

module.exports = {
  new: newIngredient,
  create
};

function newIngredient(req, res) {
    Ingredient.find({}, function(err, ingredient) {
        res.render('ingredient/new', { ingredient });
    })
}

function create(req, res) {
    var ingredient = new Ingredient(req.body);
    ingredient.save(function(err) {
        if (err) return res.redirect('ingredient/new');
        console.log(ingredient);
        res.redirect('/ingredient/new');
    });
};