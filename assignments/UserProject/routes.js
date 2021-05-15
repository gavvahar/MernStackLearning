const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.options('*', cors());

const users = [{
  fname: 'Harpreet',
  lname: 'singh',
  email:'test@test.com',
  phone: '232323232'
}];


app.use(express.json());
// // Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Content-Type', 'application/json');
  next();
});




app.get("/users", function (req, res) {
  res.header('Content-Type', 'application/json');
  res.json(users);
});

app.post("/adduser", function (req, res) {
  const userObj = req.body;

  console.log(userObj);
  users.push(userObj);
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}..`));
