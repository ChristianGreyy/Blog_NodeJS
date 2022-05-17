const { Post } = require("../models");
const { AppError } = require("../utils");

/**
 * Login with username and password
 * @param {string} userId
 * @returns {Promise<User>}
 */

const getPost = async (postId) => {
  return await Post.findById(postId).populate("userId");
};

/**
 * Login with username and password
 * @param {string} content
 * @param {string} userId
 * @returns {Promise<User>}
 */

const postCreatePost = async (title, content, file, userId) => {
  if (!file) {
    throw new AppError("Not found file", 400);
  }
  const post = new Post({
    title,
    content,
    image: `/images/${file.filename}`,
    userId: userId,
  });
  return await post.save();
};

module.exports = {
  postCreatePost,
  getPost,
};
