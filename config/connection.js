const mysql = require("mysql2");
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "titans00",
    database: "employee_db",
});
db.connect(function (err) {
    if (err) throw err;
  });
module.exports= db;