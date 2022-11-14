const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment_id: { type : mongoose.Schema.Types.ObjectId, ref: 'Comment'},
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
    ingredients: [{type: Schema.Types.ObjectId, ref: 'Ingredient'}],
    comment: [commentSchema],
    },
  );

module.exports = mongoose.model("Recipe", recipeSchema);