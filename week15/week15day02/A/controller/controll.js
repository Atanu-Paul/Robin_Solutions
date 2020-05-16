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

controll.displayOne = (req, res) => {
  var query = req.query.id;

  for (i = 0; i <= data.length; i++) {
    if (query == i) {
      var query_result = data[i - 1];
    }
  }
  res.status(200).render("page3", { tile: "One Data", data: query_result });
};

controll.addDataForm = (req, res) => {
  res.status(200).render("page4", { title: "Add Data" });
};

controll.addData = (req, res) => {
  const newObj = ({ id, userId, title, body } = req.body);
  console.log(newObj);
  data.push(newObj);
  res.status(200).redirect("show");

  // const newObj = { ...req.body };
  // data.push(newObj);
  // res.status(200).json({ status: "Data Added", data: data });
};

controll.updateDataForm = (req, res) => {
  res.status(200).render("page5", { title: "Update Data" });
};

controll.updateData = (req, res) => {
  var query = req.body.id;
  let obj = getItem(query);
  const body = { ...req.body };
  let id = obj.element.id;
  body.id = id;

  data.splice(obj.index, 1, body);
  res.status(200).redirect("show");
};

controll.deleteDataForm = (req, res) => {
  res.status(200).render("page6", { title: "Delete Data" });
};

controll.deleteData = (req, res) => {
  var query = req.body.id;
  let obj = getItem(query);
  let item = data.splice(obj.index, 1)[0];

  res.status(200).redirect("show");
};

function getItem(id) {
  let item1 = null;
  data.forEach((element, index) => {
    if (String(element.id) === id) {
      item1 = { element, index };
    }
  });
  return item1;
}

module.exports = controll;
