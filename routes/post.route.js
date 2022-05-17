const express = require("express");
const postRouter = express.Router();
const { postController } = require("../controllers");
const { upload } = require("../configs");
const auth = require("../middlewares/auth");

postRouter.route("/").get(auth, postController.getPosts);

postRouter
  .route("/createPost")
  .get(auth, postController.getCreatePost)
  .post(auth, upload.single("image"), postController.postCreatePost)
  .delete()
  .put();

postRouter.route("/:postId").get(postController.getPost);

module.exports = postRouter;
