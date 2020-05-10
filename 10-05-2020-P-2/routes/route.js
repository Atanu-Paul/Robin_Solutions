const express = require("express");
const router = express.Router();

var { defaultRoute, defaultRoute1 } = require("../controllers/controller");

router.get("/", defaultRoute);
router.get("/page2", defaultRoute1);

module.exports = router;
