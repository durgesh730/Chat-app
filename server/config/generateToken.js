const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "durgeshchaudhary", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
