const express = require("express");
const app = express();

app.use(express.json(), express.urlencoded({ extended: false }));
app.set("views", "src/views");
app.set("view engine", "hbs");

const db = [];
let counter = 0;

app.get("/", (req, res) => {
  //Get the user by id
  const user = db.find((user) => user.id === req.query.id);

  res.render(
    "index",
    user === undefined
      ? req.query.all === "true"
        ? {
            isFound: true,
            db: db,
          }
        : {
            isFound: false,
            message:
              req.query.message === undefined
                ? "Welcome to Tennis"
                : req.query.message,
          }
      : {
          isFound: true,
          message: req.query.message,
          id: req.query.id,
          name: user.username,
          country: user.country,
        }
  );
});

//View all players
app.get("/getAll", (req, res) => {
  if (db.length === 0) {
    res.redirect("/?id=-1&message=No Record Found");
  } else {
    res.redirect("/?all=true");
  }
});

//Add new player
app.post("/add", (req, res) => {
  let body = req.body;
  body.id = String(++counter);

  //Add user to db
  db.push(body);

  res.redirect(`/?id=${counter}&message=Player Added`);
});

//Update Player
app.post("/update", (req, res) => {
  //Get id
  const id = req.body.id;

  //Get user from db
  const user = db.find((user) => user.id === id);

  //Check if the record exist
  if (user !== undefined) {
    user.username = req.body.username;
    user.country = req.body.country;

    res.redirect(`/?id=${id}&message=Player Updated`);
  } else {
    res.redirect("/?id=-1&message=No Record Found");
  }
});

//Delete player
app.post("/delete", (req, res) => {
  const id = req.body.id;

  //Get user from db
  const user = db.find((user) => user.id === id);

  if (user !== undefined) {
    const index = db.indexOf(user);
    db.splice(index, 1);
    res.redirect(`/?id=${id}&message=Player Deleted`);
  } else {
    res.redirect(`/?id=-1&message=No Record Found`);
  }
});

app.listen(8080, () => {
  console.log("Server started");
});
