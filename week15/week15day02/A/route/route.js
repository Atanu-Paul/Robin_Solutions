const express = require("express");
const route = express.Router();

var {
  defaultroute,
  displayAllData,
  displayOne,
  addDataForm,
  addData,
  updateDataForm,
  updateData,
  deleteDataForm,
  deleteData,
} = require("../controller/controll");

route.get("/", defaultroute);
route.get("/show", displayAllData);
route.get("/show/id", displayOne);
route.get("/add", addDataForm);
route.get("/update", updateDataForm);
route.get("/delete", deleteDataForm);
route.post("/addData", addData);
route.put("/updateData", updateData); //use this route on postman to see the put request in action
route.post("/updateData", updateData); //use this route on the browser to see the same
route.delete("/deleteData", deleteData); //use this route on postman to see the put request in action
route.post("/deleteData", deleteData); //use this route on the browser to see the same

module.exports = route;
