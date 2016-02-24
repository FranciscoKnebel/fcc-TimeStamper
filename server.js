'use strict';

var express = require("express");
var url = require("url");
var app = express();

var dateController = require(process.cwd() + "/app/Date.js");
var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    res.sendFile(process.cwd() + "/public/index.html");
});

app.get('/*', function(req, res) {
    //Gets time object, containing Unix and Natural time
    res.end(JSON.stringify(dateController(req.params[0])));
});

app.listen(port,  function () {
	console.log('Listening on port ' + port + '...');
});