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

const getTopProducts = async (req, res) => {
  try {
    const topProducts = await Cart.aggregate([
      {$unwind:"$products"},
      {$group: {"_id" : "$products.name", "count": {$sum:1}}},
      {$sort : {count: -1}},
      {$limit: 10},
      ]);
    if (topProducts) {
      res.status(200).send(JSON.stringify(topProducts));
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  saveCartToDB,
  getTopProducts,
};
