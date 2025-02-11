const register = async (req, res) => {
  res.send("User Registered");
};

const login = async (req, res) => {
  res.send("User Login");
};

module.exports = { register, login };
