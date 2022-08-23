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

const getDepartmentsPie = async (req, res) => {
  try {
    const departmentsPie = await Cart.aggregate([
      {$unwind:"$products"},
      {$group: {"_id" : "$products.name", "count": {$sum:1}}},
      {$lookup: {"from": "products", "localField": "_id", "foreignField": "name", "as": "Product"}},
      {$unwind:"$Product"},
      {$group: {"_id" : "$Product.department", "sum": {$sum:"$count"}}},
      ]);
    if (departmentsPie) {
      res.status(200).send(JSON.stringify(departmentsPie));
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getSuggestion = async (req, res) => {
  try {
    const topDepartment = await Cart.aggregate([
      {$match: {"userId": req.params.id}},
      {$unwind:"$products"},
      {$group: {"_id" : "$products.name", "count": {$sum:1}}},
      {$lookup: {"from": "products", "localField": "_id", "foreignField": "name", "as": "Product"}},
      {$unwind:"$Product"},
      {$group: {"_id" : "$Product.department", "sum": {$sum:"$count"}}},
      {$sort : {sum: -1}},
      {$limit: 1},
      ]);
      
    if (topDepartment && topDepartment.length > 0) {
      res.status(200).send(topDepartment);
    } else {
      res.status(200).send(["to do: Top product"]);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  saveCartToDB,
  getTopProducts,
  getDepartmentsPie,
  getSuggestion,
};
