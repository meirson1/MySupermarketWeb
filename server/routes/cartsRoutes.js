const express = require("express");
const router = express.Router();

const { saveCartToDB } = require("../controller/cartsController");

router.get("/", (req, res) => {
  saveCartToDB(req, res);
});

module.exports = router;
