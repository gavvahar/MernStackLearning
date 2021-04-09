const express = require("express");
const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  console.log("GET Request Received");
  res.send(`<h2>GET Request Received on client side!!!</h2>`);
});

app.get("/user", function (req, res) {
  console.log("GET Request received for /user URI");
  res.send(`<h2 style="font-family: Malgun Gothic; color:blue;">GET Request received for /user URI!!!</h2>`);
});

// fetch('http://localhost:8080/adduser', {method: 'POST'}).then(res => console.log(res))
app.post("/adduser", function (req, res) {
  console.log("POST Request Received");
  res.send(`<h2>POST Request Received</h2>`);
});

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
