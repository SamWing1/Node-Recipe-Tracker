const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient')

module.exports = {
    new: newRecipe,
    create,
    index,
    show,
    delete: deleteRecipe,
    edit,
    update
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
            res.render('recipe/show', {title: recipe.name, recipe, ingredients})
        })
    })
};

function deleteRecipe(req, res) {
    Recipe.deleteOne( {
       _id: req.params.id}, function(err){
           res.redirect('/recipe/index');
       });
  }

  function edit(req, res) {
    console.log(Recipe)
    console.log(req.params.id)
    res.render('recipe/edit', {
      recipe: Recipe( {
        _id: req.params.id}), function(err){
            console.log(Recipe)
            res.redirect(`/recipe/${recipe._id}`)
            console.log(Recipe)
        }
    });
  }

  function update(req, res, next) {
    Recipe.findOne({
        _id: req.params.id
    })
    .then (function(recipe){
        recipe.name=req.body.name
        recipe.prepTime=req.body.prepTime
        recipe.save()
    })
    .then (function(err, recipe){
        res.redirect('/recipe/index');
    })
    .catch (function(err){
        return next(err)
    })
}
