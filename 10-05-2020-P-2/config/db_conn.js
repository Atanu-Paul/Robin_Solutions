const { Sequelize } = require("sequelize");

// setting up a new connection to postgres
const dbConn = new Sequelize(
  "fsqqzbsy",
  "fsqqzbsy",
  "pKXO4zK6Iz6g1B_-_TJr4H26PLyopgW6",
  {
    host: "rosie.db.elephantsql.com",
    dialect: "postgres",
  }
);

//testing the connection
dbConn
  .authenticate()
  .then(() => {
    console.log("Postgres database has been connected sucessfully");
  })
  .catch((err) => {
    console.error("Connection failed Database not connected  error:", err);
  });
module.exports = dbConn;
