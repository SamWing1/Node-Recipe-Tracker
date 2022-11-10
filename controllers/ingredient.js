const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');

module.exports = {
  new: newIngredient,
  create,
  addToRecipe
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

function addToRecipe(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        console.log(req.body)
      recipe.ingredients.push(req.body.ingredientId);
      recipe.save(function(err) {
          console.log(recipe)
          res.redirect(`/recipe/${recipe._id}`);
      });
    });
  }