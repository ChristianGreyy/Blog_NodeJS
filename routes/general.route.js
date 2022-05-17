const { Router } = require("express");
const express = require("express");
const { json } = require("express/lib/response");
const { kill } = require("nodemon/lib/monitor/run");
const router = express.Router();

router.get("/about", function (req, res, next) {
  res.render("pages/about");
});

router.get("/contact", function (req, res, next) {
  res.render("pages/contact");
});

module.exports = router;
