const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    client: {
      type: String,
      required: true,
      ref: "Client",
    },
    container: {
      type: Array,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { collection: "ordersDB" }
);

module.exports = mongoose.model("Cart", CartSchema);
