const express = require("express");
const route = express.Router();

var {
  allDataRoute,
  allDataRoute1,
  showOne,
  addform,
} = require("../controller/control");

route.get("/", allDataRoute);

route.get("/alldata", allDataRoute1);

route.get("/show/id", showOne);

route.get("/addform", addform);

module.exports = route;
