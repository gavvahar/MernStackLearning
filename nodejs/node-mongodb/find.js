var mongoose = require("mongoose");
var Book = require("./bookSchema");

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
});