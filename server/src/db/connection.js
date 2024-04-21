const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mysqldb',
    user: 'root',
    password: 'Sandip%321'
})

module.exports = connection;