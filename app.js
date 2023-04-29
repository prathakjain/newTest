var http = require("http"); 	// routing req. handle
var express = require("express");  // framework
var ip = require("ip");		// fix ip port
const bodyParser = require("body-parser");	// get body 

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
    limit:'50mb'
}));
app.use(bodyParser.json({limit:'50mb'})); 

var server = http.createServer(app);	// create server in node



app.get("/", function(req, res){
	res.send("Node server is running");
});

var userController = require('./userController');

app.post('/api/users', userController.addUser);
app.get('/api/users/:userId', userController.getUser);
app.delete('/api/users/:userId', userController.deleteUser);

var port = process.env.PORT || 4016; 
server.listen(port);
var ip = ip.address();
console.log('Node server is running at http://'+ip+':'+port);
