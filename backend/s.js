var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "item"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM product", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});