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


app.get("/", function (req, res) {
  console.log("GET Request Received");
  res.send(`<h2>80Eighty</h2>`);
});

app.get("/user", function (req, res) {
  console.log("GET Request received for /user URI");
  res.send(`<h2 style="font-family: Malgun Gothic; color:blue;">GET Request received for /user URI!!!</h2>`);
});
app.get("/80eighty", function (req, res) {
  console.log("GET Request received for /user URI");
  res.send(`<h2 style="font-family: Malgun Gothic; color:blue;">Nissan GTR</h2>`);
});
// fetch('http://localhost:8080/adduser', {method: 'POST'}).then(res => console.log(res))
app.post("/adduser", function (req, res) {
  const userObj = req.body;

  console.log(userObj);
  users.push(userObj);
});
app.get("/users", function (req, res) {
  res.header('Content-Type', 'application/json');
  res.json(users);
});

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
