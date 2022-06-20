const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  container: {
    type: Array,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
