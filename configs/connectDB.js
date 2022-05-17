const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect("mongodb://localhost/blog");
    console.log("connet database successfully");
  } catch (err) {
    console.log(err);
  }
};
