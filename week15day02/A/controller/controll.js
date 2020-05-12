const data = require("../model/data");

var controll = {};

controll.defaultroute = (req, res) => {
  // res.status(200).json({ message: "WELCOME" });
  let data = "WELCOME TO PAGE 1555";
  res.status(200).render("page1", { title: "Home", data: data });
};

controll.displayAllData = (req, res) => {
  res.status(200).render("page2", { title: "All Data", data: data });
};

module.exports = controll;
