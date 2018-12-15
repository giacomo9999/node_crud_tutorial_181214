const Product = require("../models/product.model");

exports.test = function(req, res) {
  res.send("Greetings from the test controller!");
};

exports.jim = function(req, res) {
  res.send("Greetings from Jim!");
};

exports.product_create = function(req, res) {
    // res.send("Product Creator here.")
  let product = new Product({
    name: req.body.name,
    price: req.body.price
  });
  product.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Product created successfully-"+req.body.name);
  });
};
