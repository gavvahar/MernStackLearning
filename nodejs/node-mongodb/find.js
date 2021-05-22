var mongoose = require("mongoose");
var Book = require("./bookSchema");
var Car = require("./Cars");
const Domino = require("./Dominos");
var Car = require("./Dominos");

mongoose.connect("mongodb://localhost/mongoose_basics", function (err) {
  if (err) throw err;

  console.log("Successfully connected");

  // Book.find({isbn: 'NODE-21'}, function (err, books) {
  //   if (err) throw err;
  //   console.log(books);
  // })

  Book.find({})
    .sort("-created")
    .limit(1)
    .exec(function (err, books) {
      if (err) throw err;
      console.log(books);
    });

    Car.find({})
    .sort("-created")
    .limit(1)
    .exec(function (err, Cars) {
      if (err) throw err;
      console.log(Cars);
    });
    Domino.find({})
    .sort("-created")
    .limit(1)
    .exec(function (err, Dominos) {
      if (err) throw err;
      console.log(Dominos);
    });
});