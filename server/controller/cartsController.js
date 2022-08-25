const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");

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
      { $unwind: "$products" },
      { $group: { _id: "$products.name", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
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
      { $unwind: "$products" },
      { $group: { _id: "$products.name", count: { $sum: 1 } } },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "name",
          as: "Product",
        },
      },
      { $unwind: "$Product" },
      { $group: { _id: "$Product.department", sum: { $sum: "$count" } } },
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
      { $match: { userId: req.params.id } },
      { $unwind: "$products" },
      { $group: { _id: "$products.name", count: { $sum: 1 } } },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "name",
          as: "Product",
        },
      },
      { $unwind: "$Product" },
      { $group: { _id: "$Product.department", sum: { $sum: "$count" } } },
      { $sort: { sum: -1 } },
      { $limit: 1 },
    ]);

    if (topDepartment && topDepartment.length > 0) {
      const product = await Product.find({
        department: topDepartment[0]._id,
      }).limit(1);
      res.status(200).send(product);
    } else {
      const topProduct = await Cart.aggregate([
        { $unwind: "$products" },
        { $group: { _id: "$products.name", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 1 },
      ]);
      if (topProduct && topProduct.length > 0) {
        const product = await Product.find({ name: topProduct[0]._id }).limit(
          1
        );
        res.status(200).send(product);
      } else {
        res.status(500).send(["no suggestion"]);
      }
    }
  } catch (error) {
    console.error(error);
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
    // console.log("error");
    // res.status(500).send({ message: error.message });
  }
};

module.exports = {
  saveCartToDB,
  getTopProducts,
  getDepartmentsPie,
  getSuggestion,
  getAllCarts,
};
