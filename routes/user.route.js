const express = require("express");
const userRouter = express.Router();
const { userController } = require("../controllers");

userRouter.route("/").post(userController.createUser);

module.exports = userRouter;
