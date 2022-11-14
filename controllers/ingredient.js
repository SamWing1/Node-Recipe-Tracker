const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');

module.exports = {
    new: newIngredient,
    create,
    addToRecipe,
    // delete: deleteIngredient
};

function newIngredient(req, res) {
    Ingredient.find({}, function (err, ingredient) {
        res.render('ingredient/new', { ingredient });
    })
}

function create(req, res) {
    var ingredient = new Ingredient(req.body);
    ingredient.save(function (err) {
        if (err) return res.redirect('ingredient/new');
        console.log(ingredient);
        res.redirect('/ingredient/new');
    });
};

function addToRecipe(req, res) {
    Recipe.findById(req.params.id, function (err, recipe) {
        console.log(req.body)
        recipe.ingredients.push(req.body.ingredientId);
        recipe.save(function (err) {
            console.log(recipe)
            res.redirect(`/recipe/${recipe._id}`);
        });
    });
}

//cant figure out how to target specific new ObjectId atm, so leaving this out for now
// function deleteIngredient(req, res) {
//     Recipe.findById(req.params.recipeid, function (err, recipe) {
//         console.log(req.params.ingredientid)
//         console.log(recipe.ingredients)
//         console.log(recipe.ingredients.indexOf(`new ObjectId("${req.params.id}")`))
//         console.log(req.params.ingredients)
//         recipe.ingredients.indexOf(req.params.ingredientId);
//         recipe.save(function (err) {
//             res.redirect(`/recipe/${recipe._id}`);
//         })
//     });
// }

//fix show page after you finish this