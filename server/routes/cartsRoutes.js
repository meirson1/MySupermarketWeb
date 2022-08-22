const express = require("express");
const router = express.Router();

const { saveCartToDB, getAllCarts } = require("../controller/cartsController");

router.get("/", (req, res) => {
  saveCartToDB(req, res);
});

router.get("/admin/order", (req, res) => {
  getAllCarts(req, res);
});

router.get("/:id", (req, res) => {
  getOrderProductById(req, res);
});

module.exports = router;
