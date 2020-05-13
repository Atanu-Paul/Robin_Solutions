const data = require("../model/data");

var control = {};

control.allDataRoute = (req, res) => {
  // res.status(200).render("page1", { title: "ALL DATA PAGE", data: data });
  res.status(200).render("welcome", { title: "WELCOME" });
};

control.allDataRoute1 = (req, res) => {
  res.status(200).render("page1", { title: "ALL DATA PAGE", data: data });
};

control.showOne = (req, res) => {
  var query = req.query.search;

  for (i = 0; i <= data.length; i++) {
    if (query == i) {
      var result = data[i - 1];
    }
  }
  res.status(200).render("page2", { title: "ALL DATA PAGE", data: result });
  // res.status(200).json({ data: result });
};

control.addform = (req, res) => {
  res.status(200).render("add", { title: "Add Data" });
};

control.add = (req, res) => {
  let newObj = { ...req.body };
  data.push(newObj);

  // console.log(newObj);
  res.status(200).render("page1", { title: "ALL DATA PAGE", data: data });
};
module.exports = control;
