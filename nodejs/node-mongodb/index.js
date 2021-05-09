var mongoose = require("mongoose");
var Book = require("./bookSchema");

mongoose.connect("mongodb://localhost/mongoose_basics", function (err) {
  if (err) throw err;

  console.log("Successfully connected");

  var nodeBook = new Book({
    title: "NodeJS book",
    summary: "Get insight of node js",
    isbn: "NODE-22"
  });
  
  nodeBook.save(function (err) {
    if (err) throw err;

    console.log("Book successfully saved.");
  });
});
