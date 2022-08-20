const express = require("express");
const router = express.Router();
const {
  registerClient,
  loginClient,
  getMe,
} = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerClient);
router.post("/login", loginClient);
router.get("/me", protect, getMe);

module.exports = router;

// router.post("/signup", (req, res) => {
//   const client = new ClientSchema({
//     name: req.body.name,
//     email: req.body.email,
//     password: req.body.password,
//   });
//   client
//     .save()
//     .then((data) => res.json(data))
//     .catch((err) => res.json(err));
// });

// router.get("/login", async (req, res) => {
//   const client = await Client.findOne({
//     email: req.body.email,
//     password: req.body.password,
//   });
// });
