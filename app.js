const express = require("express");
const bodyParser = require("body-parser");
const product = require("./routes/product.route");

const app = express();

app.use("/products", product);

let port = 1234;

app.listen(port, () => {
  console.log("server listening on port " + port);
});

// const express = require("express");
// const bodyParser = require("body-parser");
// const product = require("./routes/product.route"); // Imports routes for the products
// const app = express();
// app.use("/products", product);
// let port = 1234;
// app.listen(port, () => {
//   console.log("Server is up and running on port numner " + port);
// });
