var express = require('express');
var app = express();

app.listen(8000, function() {
	console.log('Listening Port 8000');
});

app.get('/', function(request, response) {
	response.send("Hello World!")
});