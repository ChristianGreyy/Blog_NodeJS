const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = async (req, res, next) => {
  //   console.log(req.headers);
  if (!req.headers.cookie) {
    const error = new Error("not authorization");
    return next(error);
  }
  const token = req.headers.cookie.split("=")[1];
  const decode = jwt.verify(token, process.env.SECRET_TOKEN);
  const userId = decode.sub;
  const user = await User.findById(userId);
  // console.log(user);
  if (!user) {
    const error = new Error("not authorization");
    return next(error);
  }
  res.locals.user = user;
  req.user = user;
  return next();
};
