const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  updateProductById,
  removeProductById,
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

router.delete("/admin/delete/:id", (req, res) => {
  removeProductById(req, res);
});

module.exports = router;
