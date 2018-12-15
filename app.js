const express = require("express");
const bodyParser = require("body-parser");

const product = require("./routes/product.route"); // Imports routes for the products
const app = express();

// set up Mongoose connection
const mongoose = require("mongoose");
let dev_db_url =
  "mongodb://j_gary_nodestudent:9qyug3au4BL6t7g@ds029745.mlab.com:29745/jwg_learn_node";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error."));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/products", product);

let port = 1234;

app.listen(port, () => {
  console.log("server listening on port " + port);
});
