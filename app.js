const express = require("express");
const bodyParser = require("body-parser");

const app = express();
let port = 1234;

app.listen(port, () => {
  console.log("server listening on port " + port);
});
