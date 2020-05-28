const express = require("express");
const hbs = require("hbs");
const morgan = require("morgan");
const path = require("path");

//bringing connection into the server file
// const connetDB = require("./config/db_con");
const connetDB = require(path.join(__dirname, "config/db_con"));
connetDB();

const PORT = 8080;

const app = express();

//setting up all the middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//setting up the hbs
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "view", "pages"));
app.set("view options", { layout: "main" });

//setting the partials
hbs.registerPartials(path.join(__dirname, "view", "partials"));

app.get("/", (req, res) => {
  res.status(200).render("index");
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
