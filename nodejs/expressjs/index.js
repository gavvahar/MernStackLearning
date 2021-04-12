var express = require("express");
var app = express();

// app.use(express.static("public"));
// app.use("/images", express.static(__dirname + "/public/images"));

//set view engine
app.set("view engine","jade");

app.get('/', function (req, res) {
    res.render('sample', {test: 'Hello..'});
});

var server = app.listen(5000, function () {
  console.log("Node server is running..");
});
