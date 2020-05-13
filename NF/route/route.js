const express = require("express");
const route = express.Router();

var {
  allDataRoute,
  allDataRoute1,
  showOne,
  addform,
  add,
} = require("../controller/control");

route.get("/", allDataRoute);

route.get("/show", allDataRoute1);

route.get("/show/id", showOne);

route.get("/addform", addform);

route.post("/add", add);

module.exports = route;
