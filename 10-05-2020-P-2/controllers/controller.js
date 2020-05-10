var control = {};

control.defaultRoute = (req, res) => {
  res.status(200).render("page1", { title: "Page-1" });
};

control.defaultRoute1 = (req, res) => {
  res.status(200).render("page2", { title: "Page-2" });
};

module.exports = control;
