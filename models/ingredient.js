const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema (
    {
    ingredient_id: { type : mongoose.Schema.Types.ObjectId, ref: 'Ingredient'},
    name: String,
    prepTime: Number,
    region: String,
    },
  );

module.exports = mongoose.model("Ingredient", ingredientSchema);