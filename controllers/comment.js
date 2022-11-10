const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient')

module.exports = {
  create
};

function create(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        console.log(req.body)
      recipe.comment.push(req.body);
      recipe.save(function(err) {
          console.log(recipe)
          res.redirect(`/recipe/${recipe._id}`);
      });
    });
  }