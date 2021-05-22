var mongoose = require("mongoose");

var cars = mongoose.Schema({
  year: int,
  make: String,
  model: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

var car = mongoose.model("Car", cars);
module.exports = car;