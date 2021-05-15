var mongoose = require("mongoose");

var bookSchema = mongoose.Schema({
  title: String,
  summary: String,
  isbn: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

var Book = mongoose.model("Book", bookSchema);
module.exports = Book;
