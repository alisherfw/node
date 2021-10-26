var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password"
});

con.connect(
    console.log('Connected')
)