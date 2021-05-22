var mongoose = require("mongoose");

var pizzas = mongoose.Schema({
  name: String,
  toppings: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

var Domino = mongoose.model("Pizza", pizzas);
module.exports = Domino;