const express = require("express");
const router = express.Router();
const PizzaModal = require("../models/Pizza");

//Get All
router.get("/", async (req, res) => {
  try {
    const pizza = await PizzaModal.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get One
router.get("/:id", async (req, res) => {
  try {
    user = await PizzaModal.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find User" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

//Create One
router.post("/", async (req, res) => {
  const pizzaObj = new PizzaModal({
    title: req.body.title,
    categoryId: req.body.categoryId,
  });
  try {
    const newPizza = await pizzaObj.save();
    res.status(201).json({ newPizza });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;