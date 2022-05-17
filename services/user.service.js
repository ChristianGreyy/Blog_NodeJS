const { User } = require("../models");

/**
 * Login with username and password
 * @param {string} username
 * @param {string} password
 * @returns {Promise<User>}
 */

const createUser = async (username, password, rePassword) => {
  console.log(username, password, rePassword);
  if (password !== rePassword) {
    return null;
  }
  try {
    const user = new User({
      username,
      password,
    });
    return await user.save();
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createUser,
};
