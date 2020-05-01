const express = require("express");
const calroute = express.Router();

var { getDefaultRoute, addNum } = require("../controller/control");

calroute.route("/").get(getDefaultRoute);
calroute.route("/add").get(addNum);

//exporting the module
module.exports = calroute;
