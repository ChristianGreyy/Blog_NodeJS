var express = require("express");
var router = express.Router();
const postRouter = require("./post.route");
const gengeralRouter = require("./general.route");
const authRouter = require("./auth.route");
const userRouter = require("./user.route");

const defaultRoutes = [
  {
    path: "/",
    route: gengeralRouter,
  },
  {
    path: "/post",
    route: postRouter,
  },
  {
    path: "/auth",
    route: authRouter,
  },
  {
    path: "/user",
    route: userRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

router.use((error, req, res, next) => {
  console.log(error);
});

// router.use(globalErrorHandler);
module.exports = router;
