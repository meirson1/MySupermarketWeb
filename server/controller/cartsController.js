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

const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find({}).sort({ name: "asc" });
    if (carts) {
      res.status(200).send(carts);
      console.log(products.length, "carts from DB");
    } else {
      res
        .status(404)
        .send({ code: 404, message: `There is an error with your carts` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  saveCartToDB,
  getAllCarts,
};
