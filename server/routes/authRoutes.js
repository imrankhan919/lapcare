const express = require("express");
const { register, login } = require("../controllers/authController");

const router = express.Router();

// ACCESS : PUBLIC
// ROUTE : /api/user/
// METHOD : POST
// DESC : REGISTER NEW USER
router.post("/", register);

// ACCESS : PUBLIC
// ROUTE : /api/user/login
// METHOD : POST
// DESC : LOGIN EXISTING USER
router.post("/login", login);

module.exports = router;
