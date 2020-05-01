//importing pacakges
const express = require("express");
const morgan = require("morgan");

const CalRoute = require("./route/route");

//initiallizing express
const app = express();

app.use(express.json(), morgan("dev"));

//setting up middlewares
app.use(morgan("dev"));

app.use("/", CalRoute);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Express server Listing on Port: ${PORT}`);
});
