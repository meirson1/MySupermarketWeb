const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
} = require("../controller/productController");

router.get("/", (req, res) => {
  getAllProducts(req, res);
});

router.get("/:id", (req, res) => {
  getProductById(req, res);
});

module.exports = router;
