const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    user_id: { type : mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
  },
  { timeStamps: true }
);

module.exports = mongoose.model("User", userSchema);
