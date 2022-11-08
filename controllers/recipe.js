const Recipe = require('../models/recipe');

module.exports = {
    new: newRecipe,
    create,
    index,
}

function newRecipe(req, res) {
    res.render('recipe/new');
}

function create(req, res) {
    var recipe = new Recipe(req.body);
    recipe.save(function(err) {
        if (err) return res.redirect('recipe/new');
        console.log(recipe);
        res.redirect('/');
    });
};

function index(req, res) {
    console.log(req.recipe)
    Recipe.find({}, function(err, recipe) {
        res.render('recipe/index', { title: 'All Recipes', recipe});
    });
}