const express = require("express");
const router = express.Router();
const {
  registerClient,
  loginClient,
  getMe,
  getAllClients,
  getClientById,
  updateClientById,
  removeClientById,
} = require("../controller/userController");
const { protect } = require("../middleware/authMiddleware");

router.get("/admin", (req, res) => {
  getAllClients(req, res);
});
router.get("/admin/:id", (req, res) => {
  getClientById(req, res);
});

router.put("/admin/update/:id", (req, res) => {
  updateClientById(req, res);
});

router.delete("/admin/delete/:id", (req, res) => {
  removeClientById(req, res);
});

router.post("/", registerClient);
router.post("/login", loginClient);
router.get("/me", protect, getMe);

module.exports = router;
