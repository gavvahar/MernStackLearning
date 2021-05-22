require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pizza-database", {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connection to db established"));

app.use(express.json());

const routes = require("./routes");
app.use("/api", routes);

app.listen(3000, () => console.log(`server has started at port ${3000}`));

module.exports = app;
