const { pick } = require("../utils");
const { AppError } = require("../utils");
const { postService } = require("../services");
const { catchAsync } = require("../utils");
const status = require("http-status");
const { Post } = require("../models");
const { User } = require("../models");

exports.getPosts = catchAsync(async (req, res, next) => {
  const posts = await Post.find({}).populate("userId");
  //   res.render("post");
  res.render("pages/index", {
    posts,
  });
});

exports.getPost = catchAsync(async (req, res, next) => {
  const { postId } = req.params;
  const post = await postService.getPost(postId);
  res.render("pages/post", {
    post,
  });
});

exports.getCreatePost = (req, res, next) => {
  res.render("pages/create");
};

exports.postCreatePost = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const { content, title } = req.body;
  const post = await postService.postCreatePost(
    title,
    content,
    req.file,
    req.user._id
  );
  // const user = { ...req.user };
  // console.log(typeof req.user);
  // console.log(typeof user._doc);
  // user._doc.postId = post._id;
  await User.updateOne({ _id: req.user._id }, { $set: { postId: post._id } });
  // await req.user.save();
  console.log(req.user);
  if (!post) {
    return next(new Error("Error server"), status[500]);
  }
  return res.status(status.CREATED).json({
    post,
  });
});
