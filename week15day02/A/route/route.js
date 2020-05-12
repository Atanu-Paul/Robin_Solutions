const express = require("express");
const route = express.Router();

var { defaultroute, displayAllData } = require("../controller/controll");

route.get("/", defaultroute);
route.get("/show", displayAllData);

module.exports = route;
