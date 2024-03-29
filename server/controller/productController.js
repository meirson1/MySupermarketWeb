const express = require("express");
const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const { search, department } = req.query;
    const departmentQuery =
      department == "all" ? {} : { department: { $eq: department } };
    var products = await Product.find(departmentQuery).sort({ name: "asc" });
    if (search && search !== "undefined") {
      products = products.filter((p) => {
        return p.name.toLowerCase().match(search.toLowerCase());
      });
    }
    if (products) {
      res.status(200).send(products);
      console.log(products.length, "Products from DB");
    } else {
      res
        .status(404)
        .send({ code: 404, message: `There is an error with your products` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).send(product);
    } else {
      console.info({ id }, "Product does not exist");
      res.status(500).send({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

const updateProductById = async (req, res) => {
  const newName = req.body.newName;
  const newDep = req.body.newDep;
  const newDes = req.body.newDes;
  const newPrice = req.body.newPrice;
  const newRating = req.body.newRating;

  console.log(req.body.id);
  try {
    const product = await Product.findById(req.body.id);
    if (product) {
      product.name = newName;
      product.department = newDep;
      product.description = newDes;
      product.price = newPrice;
      product.rating = newRating;

      product.save();
      res.status(200).send("product updated successfully");
    } else {
      console.info({ id }, "product does not exist");
      res.status(500).send({ message: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

const removeProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(200).send(product);
      console.info({ id }, "product deleted successfully");
    } else {
      console.info({ id }, "product didn't deleted");
      res.status(500).send({ message: error.message });
    }
  } catch (error) {}
};

const createProduct = async (req, res) => {
  try {
    const { name, department, description, price, rating, imageUrl } = req.body;
    const product = await Product.create({
      name,
      department,
      description,
      price,
      rating,
      imageUrl,
    });
    if (product) {
      res.status(200).send("product is saved");
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  updateProductById,
  removeProductById,
  createProduct,
};
