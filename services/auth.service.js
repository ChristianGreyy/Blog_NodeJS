const { User } = require("../models");
const status = require("http-status");
const { catchAsync } = require("../utils");
const cookieParser = require("cookie-parser");

/**
 * Login with username and password
 * @param {string} username
 * @param {string} password
 * @returns {Promise<User>}
 */

const postLogin = async (username, password, next) => {
  try {
    const user = await User.findOne({ username }).select("+password");
    if (!user) {
      const error = new Error("Wrong username", status[404]);
      return next(error);
    }
    if (!(await user.isCorrectPassword(password))) {
      const error = new Error("Wrong username or password", status[404]);
      return next(error);
    }
    return user;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  postLogin,
};
