const express = require("express");
const authRouter = express.Router();
const { authController } = require("../controllers");

authRouter
  .route("/login")
  .get(authController.getLogin)
  .post(authController.postLogin);

authRouter
  .route("/register")
  .get(authController.getRegister)
  .post(authController.postRegister);

module.exports = authRouter;
