const jwt = require("jsonwebtoken");
const { JWT_PRIVATE_KEY } = process.env;

const createToken = (data) => {
  const token = jwt.sign(data, JWT_PRIVATE_KEY, { expiresIn: "1h" });
  return token;
};

const verifyToken = (req, res, next) => {
  const token = req.get("Authorization");

  jwt.verify(token, JWT_PRIVATE_KEY, (error, decode) => {
    if (error) {
      return res.json({
        msg: "Invalid token",
      });
    }
    req.user = decode;
    next();
  });
};

module.exports = {
  verifyToken,
  createToken,
};
