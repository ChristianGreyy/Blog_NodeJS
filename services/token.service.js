const jwt = require("jsonwebtoken");

/**
 * Generate token
 * @param {ObjectId} userId
 * @param {Moment} expires
 * @returns {string}
 */
const generateToken = (userId, expires, secret) => {
  const payload = {
    sub: userId,
  };
  return jwt.sign(payload, secret, {
    expiresIn: expires,
  });
};

module.exports = {
  generateToken,
};
