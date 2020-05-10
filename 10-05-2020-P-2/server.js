//imoprting packages
const express = require("express");
const hbs = require("hbs");
const morgan = require("morgan");
const path = require("path");

//connecting the db_conn file
// require("./config/db_conn");

const routes = require("./routes/route");

//setting up the port number
const PORT = 8080;

//setting up express
const app = express();

//setting up middleware
// app.use(morgan("combined"));
// app.use(morgan('common'))
// app.use(morgan('dev'))
// app.use(morgan('short'))
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//setting the hbs template engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "view", "pages"));
app.set("view options", { layout: "main" });

//setting up the partials pages
hbs.registerPartials(path.join(__dirname, "view", "partials"));

//mounting the default route
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Express server listing on ${PORT}`);
});
