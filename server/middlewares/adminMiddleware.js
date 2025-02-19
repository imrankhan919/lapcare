const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const adminProtect = asyncHandler(async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");

      if (req.user.isAdmin) {
        next();
      } else {
        res.status(400);
        throw new Error("Admin Can Access This Route");
      }
    } else {
      res.status(401);
      throw new Error("Unauthorised Access");
    }
  } catch (error) {
    res.status(401);
    throw new Error("Admin Access Only");
  }
});

module.exports = adminProtect;
