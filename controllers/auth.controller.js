const { authService, tokenService } = require("../services");
const { pick } = require("../utils");
const { catchAsync } = require("../utils");
const cookie = require("cookie");

exports.getLogin = (req, res, next) => {
  res.render("pages/login");
};

exports.postLogin = catchAsync(async (req, res, next) => {
  //   const data = pick(req.body, ["username", "password"]);
  const { username, password } = req.body;
  const user = await authService.postLogin(username, password, next);
  if (!user) {
    // const error = new Error("Wrong username or password", status[404]);
    // return next(error);
    return res.redirect("/auth/login");
  }
  const token = tokenService.generateToken(
    user._id,
    process.env.EXPIRES_TOKEN,
    process.env.SECRET_TOKEN
  );

  res.cookie("token", token);

  return res.redirect("/post");
});

exports.getRegister = (req, res, next) => {
  res.render("pages/register");
};

exports.postRegister = (req, res, next) => {
  // const
};
