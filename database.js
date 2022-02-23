const mysql = require('mysql');
const myConnectionString = "mysql://root:homesick@localhost:3306/netdb";
const connection = mysql.createPool(myConnectionString);
module.exports = connection;