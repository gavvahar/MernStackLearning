const express = require("express");
const categoryRouter = require("./category");
//const orderRouter = require("./order");
//const pizzaRouter = require("./pizza");
const userRouter = require("./user");

const router = express.Router();
//router.use("/pizza", pizzaRouter);
router.use("/category", categoryRouter);
//router.use("/order", orderRouter);
router.use("/user", userRouter);
module.exports = router;