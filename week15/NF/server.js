const express = require("express");
const hbs = require("hbs");
const morgan = require("morgan");
const path = require("path");
const route = require("./route/route");

const PORT = 8080;

const app = express();

app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//setting up the hbs
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "view", "page"));
app.set("view options", { layout: "main" });

//setting the partials
hbs.registerPartials(path.join(__dirname, "view", "partials"));

app.use("/", route);

app.listen(PORT, () => {
  console.log(`Express server listing on ${PORT}`);
});
