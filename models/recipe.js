const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    recommend: String,
  }, {
    timestamps: true
  });

const recipeSchema = new Schema (
    {
    recipe_id: { type : mongoose.Schema.Types.ObjectId, ref: 'Recipe'},
    name: String,
    prepTime: Number,
    ingredients: String,
    comment: [commentSchema]
    // user: [userSchema]
    },
  );

module.exports = mongoose.model("Recipe", recipeSchema);