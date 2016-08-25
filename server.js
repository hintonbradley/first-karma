var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use('/app', express.static(__dirname + "/app"));
app.use('/node_modules', express.static(__dirname + "/node_modules"));


//GET REQUESTS
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.listen('3000', function(){
	console.log("I'm listening!");
});