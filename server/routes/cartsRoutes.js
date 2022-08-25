const express = require("express");
const router = express.Router();

const { saveCartToDB, getAllCarts, getTopProducts, getDepartmentsPie, getSuggestion } = require("../controller/cartsController");

router.get("/", (req, res) => {
  saveCartToDB(req, res);
});

router.get("/TopProducts", (req, res) => {
  getTopProducts(req, res);
});

router.get("/DepartmentsPie", (req, res) => {
  getDepartmentsPie(req, res);
});

router.get("/Suggestion/:id", (req, res) => {
  getSuggestion(req, res);
});
 
router.get("/admin/order", (req, res) => {
  getAllCarts(req, res);
});

module.exports = router;
