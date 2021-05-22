const express = require("express");
const categoryRouter = require("./category");
//const pizzaRouter = require("./pizza");

const router = express.Router();
//router.use("/pizza", pizzaRouter);
router.use("/category", categoryRouter);
module.exports = router;
