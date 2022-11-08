const Recipe = require('../models/recipe');

module.exports = {
  create
};

function create(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
      recipe.comment.push(req.body);
      recipe.save(function(err) {
          res.redirect(`/recipe/${recipe._id}`);
          console.log(recipe)
      });
    });
  }