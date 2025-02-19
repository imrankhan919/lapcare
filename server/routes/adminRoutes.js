const express = require("express");
const {
  getComplaints,
  getUsers,
  getComments,
  updateComplaint,
  addComment,
} = require("../controllers/adminController");
const adminProtect = require("../middlewares/adminMiddleware");

const router = express.Router();

router.get("/complaints", adminProtect, getComplaints);
router.get("/users", adminProtect, getUsers);
router.get("/comments", adminProtect, getComments);
router.post("/:cid", adminProtect, addComment);
router.put("/:cid", adminProtect, updateComplaint);

module.exports = router;
