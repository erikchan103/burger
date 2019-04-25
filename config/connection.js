var mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.HOST || "localhost",
  port: process.env.PORT || 8889,
  user: process.env.USERNAME || "root",
  password: process.env.PASSWORD || "root",
  database: process.env.DATABASE || "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;