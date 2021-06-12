const express = require("express");
const router = express.Router();
const OrderModal = require("../models/Order");

//Get All
router.get("/", async (req, res) => {
  try {
    const orders = await OrderModal.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get One
router.get("/:id", async (req, res) => {
  try {
    user = await OrderModal.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find User" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

//Create One
router.post("/", async (req, res) => {
  const orderObj = new OrderModal({
    userId: req.body.userId,
    pizzaId: req.body.pizzaId,
    quantity: req.body.quantity,
    toppings: req.body.toppings,
  });
  try {
    const newUser = await userObj.save();
    res.status(201).json({ newUser });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;