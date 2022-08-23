const express = require("express");
const router = express.Router();

const { saveCartToDB, getTopProducts } = require("../controller/cartsController");

router.get("/", (req, res) => {
  saveCartToDB(req, res);
});

router.get("/TopProducts", (req, res) => {
  getTopProducts(req, res);

});

module.exports = router;
