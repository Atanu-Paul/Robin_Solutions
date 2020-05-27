const express = require("express");
const hbs = require("hbs");
const morgan = require("morgan");
const path = require("path");

//bringing connection into the server file
const connetDB = require("./config/db_con");
connetDB();

const PORT = 8080;

const app = express();

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
