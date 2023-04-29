var mysql      = require('mysql');
// var constant = require('./routes/constant');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'indian123x$',
  database : 'mytest'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected");
} else {
    console.log("Error while connecting with database");
}
});
module.exports = connection;