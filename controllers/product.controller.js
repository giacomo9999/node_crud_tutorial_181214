const Product = require("../models/product.model");

exports.test = function(req, res) {
  res.send("Greetings from the test controller!");
};

// const Product = require("../models/product.model");

// //Simple version, without validation or sanitation
// exports.test = function(req, res) {
//   res.send("Greetings from the Test controller!");
// };
