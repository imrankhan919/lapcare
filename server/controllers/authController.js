const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Fill All Details!!");
  }

  // Check if user already exists
  const userExist = await User.findOne({ email: email });

  if (userExist) {
    res.status(400);
    throw new Error("User Aready Exist");
  }

  // Hash Password

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  // Create user
  const user = await User.create({ name, email, password: hashedPassword });

  if (!user) {
    res.status(400);
    throw new Error("User Not Created");
  }

  res.status(200).json(user);
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please Fill All Details!!");
  }

  // Find If User Exist In DB
  const user = await User.findOne({ email });

  if (user && bcrypt.compareSync(password, user.password)) {
    res.status(200).json(user);
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

module.exports = { register, login };
