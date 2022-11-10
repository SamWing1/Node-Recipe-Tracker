const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient')

module.exports = {
    new: newRecipe,
    create,
    index,
    show
}

function newRecipe(req, res) {
    res.render('recipe/new');
}

function create(req, res) {
    var recipe = new Recipe(req.body);
    recipe.save(function(err) {
        if (err) return res.redirect('recipe/new');
        console.log(recipe);
        res.redirect(`/recipe/${recipe._id}`);
    });
};

function index(req, res) {
    console.log(req.recipe)
    Recipe.find({}, function(err, recipe) {
        res.render('recipe/index', { title: 'All Recipes', recipe});
    });
}

function show(req, res) {
    Recipe.findById(req.params.id).populate('ingredients')
    .exec(function(err, recipe) {
        if (err) console.log(err)
        Ingredient.find({_id: {$nin: recipe.ingredients}})
        .exec(function(err, ingredients) {
            console.log(ingredients)
            res.render('recipe/show', {title: recipe.name, recipe, ingredients})
        })
    })
    };
