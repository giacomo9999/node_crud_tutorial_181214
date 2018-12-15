const express = require("express");
const router = express.Router();

const product_controller = require("../controllers/product.controller");
router.get("/test", product_controller.test);
router.get("/jim", product_controller.jim);
router.post("/create", product_controller.product_create);

module.exports = router;
