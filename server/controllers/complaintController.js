const asyncHandler = require("express-async-handler");

const getComplaints = asyncHandler(async (req, res) => {
  res.send("All Complaints");
});

const getComplaint = asyncHandler(async (req, res) => {
  res.send("Single Complaint");
});

const raiseComplaint = asyncHandler(async (req, res) => {
  res.send("Complaint Raised");
});

const updateComplaint = asyncHandler(async (req, res) => {
  res.send("Complaint Updated");
});

module.exports = {
  getComplaints,
  getComplaint,
  raiseComplaint,
  updateComplaint,
};
