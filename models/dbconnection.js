/**
  DB connnection
**/

let mysql = require('mysql');

let connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'xxxxxxxxx',
        password: 'xxxxxxxxx',
        database: 'sampledb',
        insecureAuth: true
    });

connection.connect();

module.exports = connection;
