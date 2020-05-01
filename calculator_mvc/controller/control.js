//declaring an empty object to store and export the methods
var control = {};

control.getDefaultRoute = (req, res) => {
  res.status(200).json({ success: true, message: "WELCOME" });
};

control.addNum = (req, res) => {
  let a = parseInt(req.query.num1);
  let b = parseInt(req.query.num2);

  let c = a + b;

  res.status(200).send(`<h1>Answer is : ${c}</h1>`);
};
//exporting the module
module.exports = control;
