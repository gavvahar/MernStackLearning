const express = require("express");
const router = express.Router();
const UserModal = require("../models/User");

//Get All
router.get("/", async (req, res) => {
  try {
    const users = await UserModal.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get One
router.get("/:id", async (req, res) => {
  try {
    user = await UserModal.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find User" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

//Create One
router.post("/", async (req, res) => {
  const userObj = new UserModal({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
  });
  try {
    const newUser = await userObj.save();
    res.status(201).json({ newUser });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;