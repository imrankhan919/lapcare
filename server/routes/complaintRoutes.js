const express = require("express");
const protect = require("../middlewares/authMiddleware");
const {
  getComplaints,
  getComplaint,
  raiseComplaint,
  updateComplaint,
} = require("../controllers/complaintController");

const router = express.Router();

// Get Complaints
router.get("/", protect, getComplaints);
// Get Complaint
router.get("/:id", protect, getComplaint);
// Raise Complaint
router.post("/", protect, raiseComplaint);
// Update Complaint
router.put("/:id", protect, updateComplaint);

router.use("/:id/comment", require("./commentRoutes"));

module.exports = router;
