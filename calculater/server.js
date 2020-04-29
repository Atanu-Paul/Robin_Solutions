//importing base pacakges
const express = require("express");
const morgan = require("morgan");

//initiallizing express
const app = express();

app.use(express.json());

const PORT = 8080;

//setting up middlewares
app.use(morgan("dev"));

app.get("/", (req, res) => {
  // res.status(200).json({
  //   success: true,
  //   message: "WELCOME TO CALCULATOR",
  // });
  res.status(200).send("<h1>WELCOME TO CALCULATOR</h1>");
});

app.get("/add", (req, res) => {
  let a = parseInt(req.query.num1);
  let b = parseInt(req.query.num2);

  let c = a + b;
  res.status(200).send(`<h5>${c}</h5>`);
});

app.get("/sub", (req, res) => {
  let a = parseInt(req.body.num1);
  let b = parseInt(req.body.num2);

  let c = a + b;
  res.status(200).json({
    success: true,
    answer: c,
  });
});

app.get("/multiply", (req, res) => {
  if (req.query.num1 === "" || req.query.num2 === "") {
    res.status(400).send(`<h5>Provide both numbers</h5>`);
  }
  let a = parseInt(req.query.num1);
  let b = parseInt(req.query.num2);

  let c = a * b;
  res.status(200).send(`<h5>${c}</h5>`);
});

// let a = req.query.num1;
// let b = req.query.num2;

// let c = a + b;
// res.status(200).send(`<h5>${c}</h5>`);
// });

app.get("/divide", (req, res) => {
  let a = parseInt(req.body.num1);
  let b = parseInt(req.body.num2);

  let c = a / b;
  res.status(200).json({
    success: true,
    answer: c,
  });

  // let a = req.body.username;
  // let b = req.body.password;

  // let c = a + b;
  // res.status(200).json({
  //   success: true,
  //   values: c,
  // });
});

app.listen(PORT, () => {
  console.log(`Express server Listing on Port: ${PORT}`);
});
