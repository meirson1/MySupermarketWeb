const express = require("express");
const router = express.Router();

const {
  getAllLocations,
} = require("../controller/locationControllers");

router.get("/", (req, res) => {
  getAllLocations(req, res);
});

module.exports = router;
