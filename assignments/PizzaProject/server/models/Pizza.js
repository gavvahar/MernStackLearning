const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
  },
});

const Category = mongoose.model("Pizza", pizzaSchema);
module.exports = Category;
