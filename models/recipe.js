const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema (
    {
    recipe_id: { type : mongoose.Schema.Types.ObjectId, ref: 'Recipe'},
    name: String,
    prepTime: Number,
    ingredients: String,
    // user: [userSchema]
    },
  );

module.exports = mongoose.model("Recipe", recipeSchema);