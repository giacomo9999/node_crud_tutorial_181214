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
    res.send("Product created successfully- " + req.body.name);
    console.log("Product created successfully- " + req.body.name);
  });
};

exports.product_details = function(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err) return next(err);
    res.send(product);
    console.log("Product sent.");
  });
};

exports.product_update = function(req, res) {
  Product.findOneAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    product
  ) {
    if (err) return next(err);
    res.send("Product updated");
    console.log("Product updated.");
  });
};

exports.product_delete = function(req, res) {
  Product.findOneAndRemove(req.params.id, function(err, product) {
    if (err) return next(err);
    res.send(product);
    console.log("Product deleted.");
  });
};
