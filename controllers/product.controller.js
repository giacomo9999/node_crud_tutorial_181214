const Product = require("../models/product.model");

exports.test = function(req, res) {
  res.send("Greetings from the test controller!");
};

exports.jim = function(req, res) {
  res.send("Greetings from Jim!");
};
