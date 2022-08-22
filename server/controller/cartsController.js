const express = require("express");
const Cart = require("../models/Cart");

const saveCartToDB = async (req, res) => {
  try {
    const { userId, totalPrice, products } = req.query;
    const cart = await Cart.create({
      products,
      totalPrice,
      userId,
    });
    if (cart) {
      res.status(200).send("Cart is saved");
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  saveCartToDB,
};
