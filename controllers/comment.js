const Recipe = require('../models/recipe');

module.exports = {
  create,
  delete: deleteComment
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

  function deleteComment(req, res) {
    Recipe.findById(req.params.recipeid, function(err, recipe) {
      recipe.comment.id(req.params.commentid).remove();
      recipe.save(function(err) {
      res.redirect(`/recipe/${recipe._id}`);
            })
       });
  }