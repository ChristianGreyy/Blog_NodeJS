const { catchAsync } = require("../utils");
const { userService } = require("../services");

exports.getUser = (req, res, next) => {};

exports.createUser = catchAsync(async (req, res, next) => {
  const { username, password, rePassword } = req.body;
  const user = await userService.createUser(username, password, rePassword);

  if (user) {
    res.redirect("/auth/login");
  }
});
