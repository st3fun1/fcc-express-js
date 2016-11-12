var express = require("express");
var http = require("http");

//Build the app
var app = express();

//Add some middleware
app.use(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello world!\n");
});

http.createServer(app).listen(1337);
