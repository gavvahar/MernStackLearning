const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  userId: {
    type: Integer,
    required: true,
  },
  pizzaId: {
    type: Integer,
    required: true,
  },
  quantity: {
    type: Integer,
    required: true,
  },
  toppings: {
    type: Array,
  },
});

const Order = mongoose.model("Order", userSchema);
module.exports = Order;
