const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  updateProductById,
} = require("../controller/productController");

router.get("/", (req, res) => {
  getAllProducts(req, res);
});

router.get("/:id", (req, res) => {
  getProductById(req, res);
});

router.put("/admin/update/:id", (req, res) => {
  updateProductById(req, res);
});

module.exports = router;
