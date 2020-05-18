const express = require("express");
const uuid = require("uuid").v4;
const cookie_parser = require("cookie-parser");

const PORT = 8080;

const app = express();
const id = uuid();

const config = {
  maxAge: 1000 * 60 * 3,
  httpOnly: true,
  signed: true,
};

app.use(cookie_parser("whocares"));

app.get("/", (req, res) => {
  res.cookie("token", id, config);
  // res.cookie("max_age", Number(config.maxAge) / 60000, config);
  res.send('<script type="text/javascript">alert(`Cookie send`)</script>');
});

app.listen(PORT, () => {
  console.log(`Express server listing on ${PORT}`);
});
